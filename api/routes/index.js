/* eslint-disable import/extensions */
import { Router } from "express";
import { Resend } from "resend";

const router = Router();

/** Rate limit: primeras 2 llamadas libres; desde la 3ª solo 1 por minuto (por IP). */
const RATE_LIMIT_MS = 60 * 1000;
const FREE_CALLS = 2;
const rateLimitByIp = new Map();

function rateLimitFromThirdCall(req, res, next) {
  const key = req.ip || req.socket?.remoteAddress || "unknown";
  const now = Date.now();
  let data = rateLimitByIp.get(key);

  if (!data) {
    data = { count: 0, lastAllowedAt: 0 };
    rateLimitByIp.set(key, data);
  }

  if (data.count < FREE_CALLS) {
    data.count += 1;
    return next();
  }

  if (now - data.lastAllowedAt >= RATE_LIMIT_MS) {
    data.lastAllowedAt = now;
    return next();
  }

  const retryAfter = Math.ceil((RATE_LIMIT_MS - (now - data.lastAllowedAt)) / 1000);
  res.set("Retry-After", String(retryAfter));
  return res.status(429).json({
    error: "Demasiadas solicitudes. Espera un minuto antes de intentar de nuevo.",
    retryAfterSeconds: retryAfter,
  });
}

export default (app) => {
  const { logger } = app.locals;
  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  router.get("/", rateLimitFromThirdCall, (req, res) => {
    res.json({ status: "ok", message: "Portfolio API" });
  });

  router.post("/sendemail", rateLimitFromThirdCall, async (req, res) => {
    const apiKey = process.env.RESEND_API_KEY;
    const mailTo = process.env.MAIL_TO;
    const mailFrom = process.env.MAIL_FROM;

    if (!apiKey || !mailTo || !mailFrom) {
      logger.error("Server misconfiguration: missing email environment variables");
      return res.status(500).json({
        error: "Server misconfiguration: missing email environment variables",
      });
    }

    const { name, email, message } = req.body ?? {};

    if (!name || !email || !message) {
      logger.error("Missing required fields: name, email, message");
      return res.status(400).json({
        error: "Missing required fields: name, email, message",
      });
    }

    const resend = new Resend(apiKey);

    try {
      const { error } = await resend.emails.send({
        from: mailFrom,
        to: mailTo,
        replyTo: email,
        subject: `${name} – Dev Portfolio`,
        text: `From: ${email}\n\n${message}`,
        html: `
          <div>
            <h3>${escapeHtml(name)}</h3>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          </div>
        `,
      });
      if (error) {
        logger.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      return res.json({ success: true, message: "Email sent" });
    } catch (err) {
      logger.error("Resend error:", err);
      return res.status(500).json({
        error: "Failed to send email",
      });
    }
  });

  return router;
};

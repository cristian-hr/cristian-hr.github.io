/* eslint-disable import/extensions */
import { Router } from "express";
import { Resend } from "resend";

const router = Router();

export default (app) => {
  const logger = app.locals.logger;
  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  
  router.get("/", (req, res) => {
    res.json({ status: "ok", message: "Portfolio API" });
  });
  
  router.post("/sendemail", async (req, res) => {
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

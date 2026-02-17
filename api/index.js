/* eslint-disable import/extensions */
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import winston from "winston";

import routes from "./routes/index.js";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.simple(),
  ),
  transports: [new winston.transports.Console()],
});

const app = express();
app.set("trust proxy", 1);
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.locals.logger = logger;

app.use("/", routes(app));

app.use((err, req, res) => {
  const status = err.status ?? 500;
  const message = err.message ?? "Internal server error";
  logger.error(`${status} - ${message}`);
  res.status(status).json({ error: message });
});

config();

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, "0.0.0.0", () => {
  logger.info(`API listening on port ${PORT}`);
});

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import companyRoutes from "./routes/companyRoutes";
import contributorRoutes from "./routes/contributorRoutes";
import helloRoutes from "./routes/helloRoutes";
import userRoutes from "./routes/userRoutes";
import Keycloak from "keycloak-connect";
import { PrismaClient } from "@prisma/client";
import { createUserIfNotExistsMiddleware } from "./middlewares/createUserIfNotExistsMiddleware";

const kcConfig = {
  clientId: process.env.KC_CLIENT_ID,
  bearerOnly: true,
  serverUrl: process.env.KC_URL,
  "ssl-required": "external",
  secret: process.env.KC_SECRET,
  realm: process.env.KC_REALM,
  "auth-server-url": process.env.KC_URL,
  "confidential-port": 0,
  resource: process.env.KC_CLIENT_ID,
};

export const keycloak = new Keycloak({}, kcConfig);

export const prisma = new PrismaClient();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(keycloak.middleware());
app.use(createUserIfNotExistsMiddleware);

app.use("/api", helloRoutes);
app.use("/api/users", userRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/contributors", contributorRoutes);

export { app };

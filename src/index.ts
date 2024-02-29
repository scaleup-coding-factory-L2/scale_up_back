import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import companyRoutes from "./routes/companyRoutes";
import contributorRoutes from "./routes/contributorRoutes";
import helloRoutes from "./routes/helloRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", helloRoutes);
app.use("/api/users", userRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/contributors", contributorRoutes);

export { app };

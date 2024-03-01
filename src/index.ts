import express from "express";
import cors from "cors";
import helmet from "helmet";
import helloRoutes from "./routes/helloRoutes";
import userRoutes from "./routes/userRoutes";
import contractsRoutes from "./routes/contractsRoutes";
import morgan from "morgan";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", helloRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contracts", contractsRoutes);

export { app };

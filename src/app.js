import cors from "cors";
import express from "express";
import "express-async-errors";
import "dotenv/config";
import AppRouter from "./routes/index.js";
import ErrorHandlingLayer from "./global/middleware/errorHandlingLayer.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(AppRouter);
app.use(ErrorHandlingLayer);

export default app;

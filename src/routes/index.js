import { Router } from "express";
import AuthRouter from "./auth.router.js";

const AppRouter = Router();

AppRouter.use(AuthRouter);

export default AppRouter;

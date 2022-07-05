import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

router.post("/sign-up", AuthController.signUp);
router.post("/sign-in", AuthController.signIn);

export default router;

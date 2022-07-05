import { Router } from "express";
import FinanceController from "../controllers/finance.controller.js";
import validateToken from "../global/middleware/validateToken.js";

const router = Router();

router.post(
  "/financial-events",
  validateToken,
  FinanceController.postFinancialEvent
);

router.get(
  "/financial-events",
  validateToken,
  FinanceController.getFinancialEvent
);

router.get("/financial-events/sum", validateToken, FinanceController.getSum);

export default router;

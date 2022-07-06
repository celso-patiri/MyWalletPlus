import * as jwt from "jsonwebtoken";
import {
  UnauthorizedException,
  UnprocessableEntityException,
} from "../global/exceptions/app.exceptions.js";
import FinanceRepository from "../repositories/finances.repository.js";

const validateToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new UnauthorizedException("Invalid jwt token");
  }
};

const validatePostFinanceBody = (value, type) => {
  const financialTypes = ["INCOME", "OUTCOME"];
  if (!value || value < 0 || !type || !financialTypes.includes(type)) {
    throw new UnprocessableEntityException("Invalid body");
  }
};

const createFinance = FinanceRepository.createFinance;
const getFinancialEvent = FinanceRepository.getFinancialEvent;

const getSumOfEvents = (events) => {
  return events.rows.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0
  );
};

export default {
  validateToken,
  validatePostFinanceBody,
  createFinance,
  getFinancialEvent,
  getSumOfEvents,
};

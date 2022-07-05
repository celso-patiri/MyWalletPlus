import FinanceService from "../services/finance.service.js";

const postFinancialEvent = async (req, res) => {
  const token = res.locals.token;
  const user = FinanceService.validateToken(token);

  const { value, type } = req.body;

  FinanceService.validatePostFinanceBody(value, type);
  FinanceService.createFinance(user);

  res.sendStatus(201);
};

const getFinancialEvent = async (_req, res) => {
  const token = res.locals.token;
  const user = FinanceService.validateToken(token);

  const events = await FinanceService.getFinancialEvent(user);
  res.send(events.rows);
};

const getSum = async (_req, res) => {
  const token = res.locals.token;
  const user = FinanceService.validateToken(token);

  const events = await FinanceService.getFinancialEvent(user);
  const sum = FinanceService.getSumOfEvents(events);

  res.send({ sum });
};

export default {
  postFinancialEvent,
  getFinancialEvent,
  getSum,
};

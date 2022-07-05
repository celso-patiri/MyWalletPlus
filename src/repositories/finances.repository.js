import connection from '../database.js'

const createFinance = (user, value, type) => {
    await connection.query(
      `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
      [user.id, value, type]
    );
};

const getFinancialEvent = async (user) => {
 return connection.query(
      `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
      [user.id]
    );

}

export default {
  createFinance,
  getFinancialEvent
};

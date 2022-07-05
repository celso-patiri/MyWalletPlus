import connection from "../database.js";

const findUser = async (email) => {
  return connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email]);
};

const createUser = async (name, email, password) => {
  return connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, password]
  );
};

export default {
  findUser,
  createUser,
};

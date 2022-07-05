import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UsersRepository from "../repositories/users.repository.js";
import {
  UnprocessableEntityError,
  UnauthorizedError,
  NotFoundError,
} from "../global/exceptions/app.exceptions.js";

const validateSignUpBody = (name, email, password) => {
  if (!name || !email || !password) {
    throw UnprocessableEntityError("Invalid signup body");
  }
};

const validateSignInBody = (email, password) => {
  if (!email || !password) {
    throw UnprocessableEntityError("Invalid signin body");
  }
};

const signUserUp = async (name, email, password) => {
  const existingUsers = await UsersRepository.findUser(email);

  if (existingUsers.rowCount > 0) {
    throw NotFoundError("User not found");
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  return UsersRepository.createUser(name, email, hashedPassword);
};

const signUserIn = async (email, password) => {
  const { rows } = await UsersRepository.findUser(email);
  const [user] = rows;

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw UnauthorizedError("Invalid credentials");
  }

  return jwt.sign({ id: user.id }, process.env.JWT_SECRET);
};

export default {
  validateSignUpBody,
  validateSignInBody,
  signUserUp,
  signUserIn,
};

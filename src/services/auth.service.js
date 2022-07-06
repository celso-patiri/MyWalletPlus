import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from "../global/exceptions/app.exceptions.js";
import UsersRepository from "../repositories/users.repository.js";

const validateSignUpBody = (name, email, password) => {
  if (!name || !email || !password) {
    throw new UnprocessableEntityException("Invalid signup body");
  }
};

const validateSignInBody = (email, password) => {
  if (!email || !password) {
    throw new UnprocessableEntityException("Invalid signin body");
  }
};

const signUserUp = async (name, email, password) => {
  const existingUsers = await UsersRepository.findUser(email);

  if (existingUsers.rowCount > 0) {
    throw new NotFoundException("User not found");
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  return UsersRepository.createUser(name, email, hashedPassword);
};

const signUserIn = async (email, password) => {
  const { rows } = await UsersRepository.findUser(email);
  const [user] = rows;

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new UnauthorizedException("Invalid credentials");
  }

  return jwt.sign({ id: user.id }, process.env.JWT_SECRET);
};

export default {
  validateSignUpBody,
  validateSignInBody,
  signUserUp,
  signUserIn,
};

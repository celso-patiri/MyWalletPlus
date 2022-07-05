import AuthService from "../services/auth.service.js";

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  AuthService.validateSignUpBody(name, email, password);
  AuthService.signUserUp(name, email, password);

  res.sendStatus(201);
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  AuthService.validateSignInBody(email, password);
  const token = await AuthService.signUserIn(email, password);

  res.send({ token });
};

export default {
  signUp,
  signIn,
};

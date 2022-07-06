import { UnauthorizedException } from "../exceptions/app.exceptions.js";

export default function validateToken(req, res) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  if (!token) {
    throw new UnauthorizedException("Token required");
  }

  try {
    res.locals.user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new UnauthorizedException("Invalid credentials");
  }
}

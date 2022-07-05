export default function errorHandlingMiddleware(error, _req, res, _next) {
  if (error) {
    res.status(error.status).send(error.message);
  }

  res.sendStatus(500);
}

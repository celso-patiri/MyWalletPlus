export default function errorHandlingMiddleware(error, _req, res, _next) {
  if (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }

  res.sendStatus(500);
}

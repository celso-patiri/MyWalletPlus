class Exception {
  status;
  message;

  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

export const UnprocessableEntityError = (message) =>
  new Exception(422, message);
export const ConflictError = (message) => new Exception(409, message);
export const UnauthorizedError = (message) => new Exception(401, message);
export const NotFoundError = (message) => new Exception(404, message);

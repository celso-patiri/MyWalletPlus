class Exception {
  status;
  message;

  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

export class UnprocessableEntityException extends Exception {
  constructor(message) {
    super(422, message);
  }
}

export class ConflictException extends Exception {
  constructor(message) {
    super(409, message);
  }
}

export class UnauthorizedException extends Exception {
  constructor(message) {
    super(401, message);
  }
}

export class NotFoundException extends Exception {
  constructor(message) {
    super(404, message);
  }
}

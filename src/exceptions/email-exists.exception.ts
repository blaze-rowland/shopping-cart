import { HttpException } from './http.exception';

export class EmailExistsException extends HttpException {
  constructor(email: string) {
    super(400, `User with ${email} already exists`);
  }
}

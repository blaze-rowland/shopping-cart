import { Request, Router } from 'express';
import { NextFunction, Response } from 'express-serve-static-core';
import { Controller } from '../../interfaces/controller.interface';
import { UserService } from './user.service';
import { UserTable } from './user.table';

export class UserController implements Controller {
  public path: string;
  public router = Router();
  private _service = new UserService();

  constructor(path: string) {
    this.path = path;
    this._initRoutes();
  }

  private _initRoutes() {
    this.router.get(`${this.path}/test`, this._get);
  }

  private _get = async (req: Request, res: Response, next: NextFunction) => {
    this._service.getAll().subscribe({
      next: (users) => res.send(users),
    });
  };
}

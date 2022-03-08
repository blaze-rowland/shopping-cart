import { Request, Router } from 'express';
import { NextFunction, Response } from 'express-serve-static-core';
import { userTable } from '../../database';
import { Controller } from '../../interfaces/controller.interface';
import { UserService } from './user.service';
import { UserSchema, UserTable } from './user.table';

export class UserController implements Controller {
  public path: string;
  public router = Router();
  private _service = new UserService();

  constructor(path: string) {
    this.path = path;
    this._initRoutes();
  }

  private _initRoutes() {
    this.router.get(`${this.path}`, this._getAll);
    this.router.get(`${this.path}/:id`, this._get);
    this.router.post(`${this.path}`, this._create);
  }

  private _getAll = async (req: Request, res: Response, next: NextFunction) => {
    this._service.getAll().subscribe({
      next: (users) => res.send(users),
    });
  };

  private _get = async (req: Request, res: Response, next: NextFunction) => {
    this._service.get(parseInt(req.params.id)).subscribe({
      next: (user) => res.send(user),
    });
  };

  private _create = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as UserSchema;
    this._service.create({ ...user, createdAt: new Date() }).subscribe({
      next: (user) => res.send({ msg: 'Created' }),
    });
  };
}

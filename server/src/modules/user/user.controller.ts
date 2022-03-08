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
    this.router.get(`${this.path}/`, this._getAll);
    this.router.get(`${this.path}/:id`, this._get);
    this.router.post(`${this.path}/`, this._create);
    this.router.patch(`${this.path}/:id`, this._update);
    this.router.delete(`${this.path}/:id`, this._delete);
  }

  private _getAll = async (req: Request, res: Response, next: NextFunction) => {
    this._service.getAll().subscribe({
      next: (users) => res.send(users),
      error: (err) => next(err),
    });
  };

  private _get = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    this._service.get(id).subscribe({
      next: (user) => res.send(user),
      error: (err) => next(err),
    });
  };

  private _create = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as UserSchema;

    this._service.create({ ...user, createdAt: new Date() }).subscribe({
      next: (user) => res.send({ msg: 'Created', user }),
      error: (err) => next(err),
    });
  };

  private _update = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as UserSchema;
    const id = parseInt(req.params.id);

    this._service.update(id, user).subscribe({
      next: (user) => res.send({ msg: 'Updated', user }),
      error: (err) => next(err),
    });
  };

  private _delete = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    this._service.delete(id).subscribe({
      next: (user) => res.send({ msg: 'Deleted', user }),
      error: (err) => next(err),
    });
  };
}

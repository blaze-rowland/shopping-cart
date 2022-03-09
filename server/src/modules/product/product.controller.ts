import { Request, Router } from 'express';
import { NextFunction, Response } from 'express-serve-static-core';
import { Controller } from '../../interfaces/controller.interface';
import { ProductService } from './product.service';
import { ProductSchema, ProductTable } from './product.table';

export class ProductController implements Controller {
  public path: string;
  public router = Router();
  private _service = new ProductService();

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
      next: (products) => res.send(products),
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
    const product = req.body.product as ProductSchema;
    const image = req.body.formImage;
    console.log('test', req.body);
    this._service
      .create({ ...product, createdAt: new Date() }, image)
      .subscribe({
        next: (product) => res.send({ msg: 'Created', product }),
        error: (err) => next(err),
      });
  };

  private _update = async (req: Request, res: Response, next: NextFunction) => {
    const product = req.body.product as ProductSchema;
    const id = parseInt(req.params.id);

    this._service.update(id, product).subscribe({
      next: (product) => res.send({ msg: 'Updated', product }),
      error: (err) => next(err),
    });
  };

  private _delete = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    this._service.delete(id).subscribe({
      next: (product) => res.send({ msg: 'Deleted', product }),
      error: (err) => next(err),
    });
  };
}

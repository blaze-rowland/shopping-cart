import { Request, Router } from 'express';
import { NextFunction, Response } from 'express-serve-static-core';
import { Controller } from '../../interfaces/controller.interface';
import { ProductService } from './product.service';
import { ProductTable } from './product.table';

export class ProductController implements Controller {
  public path: string;
  public router = Router();
  private _service = new ProductService();

  constructor(path: string) {
    this.path = path;
    this._initRoutes();
  }

  private _initRoutes() {
    this.router.get(`${this.path}/`, this._get);
  }

  private _get = async (req: Request, res: Response, next: NextFunction) => {
    this._service.getAll().subscribe({
      next: (products) => res.send(products),
    });
  };
}

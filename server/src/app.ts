import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { Controller } from './interfaces/controller.interface';
dotenv.config();

export class App {
  private _app: Application;

  public port = process.env.PORT || 3000;

  constructor(controllers: Controller[]) {
    this._app = express();
    this._initMiddlewares();
    this._initControllers(controllers);
  }

  public listen() {
    this._app.listen(this.port, () =>
      console.log(`Server started at http://localhost:${this.port}`)
    );
  }

  private _initMiddlewares() {
    this._app.use(cors());
    this._app.use(helmet());
    this._app.use(morgan('dev'));
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));
  }

  private _initControllers(controllers: Controller[]) {
    this._app.get('/', (req: Request, res: Response) => {
      res.json({
        msg: 'You ',
      });
    });

    controllers.forEach((controller) => {
      this._app.use('/api/v1/', controller.router);
    });
  }
}

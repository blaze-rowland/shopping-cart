import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { Controller } from './interfaces/controller.interface';
import { errorMiddleware } from './middlewares/error.middleware';
dotenv.config();

export class App {
  private _app: Application;

  public port = process.env.PORT || 3000;

  constructor(controllers: Controller[]) {
    this._app = express();
    this._initMiddlewares();
    this._initControllers(controllers);
    this._serveClient();
  }

  public listen() {
    this._app.listen(this.port, () =>
      console.log(`Server started at http://localhost:${this.port}`)
    );
  }

  private _initMiddlewares() {
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
    this._app.use(cors());
    this._app.use(helmet());
    this._app.use(morgan('dev'));
    this._app.use(errorMiddleware);
  }

  private _initControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this._app.use('/api/v1/', controller.router);
    });
  }

  private _serveClient() {
    const rootRouter = express.Router();
    const buildPath = path.normalize(
      path.join(__dirname, '../src/clientapp/build')
    );
    this._app.use(express.static(buildPath));

    rootRouter.get(
      '(/*)?',
      (req: Request, res: Response, next: NextFunction) => {
        res.sendFile(path.join(buildPath, 'index.html'));
      }
    );
    this._app.use(rootRouter);
  }
}

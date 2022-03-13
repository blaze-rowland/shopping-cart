import { App } from './app';
import { seed } from './database/seeder';
import { ProductController } from './modules/product/product.controller';
import { UserController } from './modules/user/user.controller';

const app = new App([
  new UserController('/users'),
  new ProductController('/products'),
]);

app.listen();

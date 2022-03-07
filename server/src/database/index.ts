import { ProductTable } from '../modules/product/product.table';
import { UserTable } from '../modules/user/user.table';

const userTable = new UserTable('users');
const productTable = new ProductTable('products');

export { userTable, productTable };

import { AmountUnitTable } from '../modules/amountUnit/amountUnit.table';
import { ProductTable } from '../modules/product/product.table';
import { UserTable } from '../modules/user/user.table';

const userTable = new UserTable('users');
const productTable = new ProductTable('products');
const amountUnitTable = new AmountUnitTable('amountUnits');

export { userTable, productTable, amountUnitTable };

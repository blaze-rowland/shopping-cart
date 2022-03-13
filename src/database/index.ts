import { BrandTable } from '../modules/brand/brand.table';
import { ProductTable } from '../modules/product/product.table';
import { TagTable } from '../modules/tag/tag.table';
import { UnitTable } from '../modules/unit/unit.table';
import { UserTable } from '../modules/user/user.table';

const userTable = new UserTable('users');
const productTable = new ProductTable('products');
const unitTable = new UnitTable('units');
const tagTable = new TagTable('tags');
const brandTable = new BrandTable('brands');

export { userTable, productTable, unitTable, tagTable, brandTable };

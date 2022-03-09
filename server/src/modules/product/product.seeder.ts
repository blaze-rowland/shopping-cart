import { SqlService } from '@forty-boy/sql';
import { ProductTable } from './product.table';

export async function productSeeder() {
  const productTable = new ProductTable('Products');

  async function createTable() {
    const sqlService = new SqlService(productTable.tableName);
    await sqlService.createTableQuery([
      {
        name: 'id',
        type: 'INT',
        size: 11,
        nullable: false,
        autoIncrement: true,
        primaryKey: true,
      },
      {
        name: 'name',
        type: 'VARCHAR',
        size: 255,
        nullable: false,
      },
      {
        name: 'price',
        type: 'INT',
        size: 11,
        nullable: false,
      },
      {
        name: 'image',
        type: 'VARCHAR',
        size: 255,
        nullable: true,
      },
      {
        name: 'isPromo',
        type: 'BOOL',
        nullable: false,
        default: '0',
      },
      {
        name: 'createdAt',
        type: 'DATETIME',
        nullable: false,
      },
    ]);
  }

  async function createProducts() {
    productTable.add({
      name: 'Box',
      price: 5,
      isPromo: false,
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Television',
      price: 600,
      isPromo: false,
      createdAt: new Date(),
    });
  }

  await createTable();
  await createProducts();
  console.log('Created Products table and seeded');
}

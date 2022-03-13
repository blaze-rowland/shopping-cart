import { SqlService } from '@forty-boy/sql';
import { brandTable, tagTable } from '../../database';
import { ProductTable } from './product.table';

export async function productSeeder() {
  const productTable = new ProductTable('Products');

  function getRandomId(): number {
    return Math.floor(Math.random() * 4 + 1);
  }

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
        name: 'discount',
        type: 'INT',
        size: 3,
        nullable: true,
      },
      {
        name: 'image',
        type: 'VARCHAR',
        size: 255,
        nullable: true,
      },
      {
        name: 'description',
        type: 'TEXT',
        nullable: true,
      },
      {
        name: 'isPromo',
        type: 'BOOL',
        nullable: false,
        default: '0',
      },
      {
        name: 'quantity',
        type: 'INT',
        size: 11,
        nullable: false,
      },
      {
        name: 'unitId',
        type: 'INT',
        nullable: true,
        foreignKey: {
          referenceId: 'id',
          referenceTable: 'units',
        },
      },
      {
        name: 'brandId',
        type: 'INT',
        size: 11,
        nullable: false,
        foreignKey: {
          referenceId: 'id',
          referenceTable: brandTable.tableName,
        },
      },
      {
        name: 'tagId',
        type: 'INT',
        size: 11,
        nullable: false,
        foreignKey: {
          referenceId: 'id',
          referenceTable: tagTable.tableName,
        },
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
      name: '707 Headband Flower',
      price: 55,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 15,
      image:
        'https://prod-secure-cresco-uploads.s3.amazonaws.com/e830bcb7-92e9-425a-9f42-f8d4955efd3f.jpeg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Slurricrasher Flower',
      price: 55,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 15,
      image:
        'https://s3-us-west-2.amazonaws.com/prod-secure-cresco-uploads/1e7c5695-a955-447e-8d14-0055e74bb873.jpg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Jet Fuel',
      price: 55,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 15,
      image:
        'https://s3-us-west-2.amazonaws.com/prod-secure-cresco-uploads/c0cb5dc3-de20-4206-8cf4-947389dcde3d.jpg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Ice Cream Cake',
      price: 165,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 15,
      image:
        'https://s3-us-west-2.amazonaws.com/prod-secure-cresco-uploads/079fc5e4-5647-4b1e-a828-8acb8a988f76.jpg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Zhirley Temple',
      price: 160,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 15,
      image:
        'https://prod-secure-cresco-uploads.s3.amazonaws.com/464ff767-e930-4eba-812e-d928d409f91d.jpeg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Shawnee Hills',
      price: 80,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 0,
      image:
        'https://s3-us-west-2.amazonaws.com/prod-secure-cresco-uploads/11fb3547-a36b-4c2f-aa70-5aaf4a88fff0.jpg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Hazmat',
      price: 59,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 0,
      image:
        'https://prod-secure-cresco-uploads.s3.amazonaws.com/5e9ab381-5a87-4033-82df-9e1ac68ebed9.jpeg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Razzmatazz',
      price: 70,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 0,
      image:
        'https://prod-secure-cresco-uploads.s3.amazonaws.com/b2a20181-6c21-4d31-b143-0a23da07da1e.jpeg',
      createdAt: new Date(),
    });

    productTable.add({
      name: 'Mr. Clean',
      price: 70,
      isPromo: false,
      brandId: getRandomId(),
      tagId: getRandomId(),
      description: 'Lorem ipsum',
      quantity: 5,
      unitId: getRandomId(),
      discount: 0,
      image:
        'https://s3-us-west-2.amazonaws.com/prod-secure-cresco-uploads/795a7d66-bc3e-4a1d-95b4-42e69ba4a3f5.jpg',
      createdAt: new Date(),
    });
  }

  await createTable();
  await createProducts();
  console.log('Created Products table and seeded');
}

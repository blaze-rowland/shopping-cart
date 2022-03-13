import { SqlService } from '@forty-boy/sql';
import { brandTable } from '../../database';

export async function brandSeeder() {
  async function createBrandsTable() {
    const sqlService = new SqlService(brandTable.tableName);

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
        name: 'url',
        type: 'VARCHAR',
        size: 255,
        nullable: true,
      },
      {
        name: 'createdAt',
        type: 'DATETIME',
        nullable: false,
      },
    ]);
  }

  async function createBrands() {
    brandTable.add({
      name: 'Aeriz',
      url: 'https://www.google.com',
      createdAt: new Date(),
    });

    brandTable.add({
      name: 'Bedford Grow',
      url: 'https://www.google.com',
      createdAt: new Date(),
    });

    brandTable.add({
      name: 'Cresco',
      url: 'https://www.google.com',
      createdAt: new Date(),
    });

    brandTable.add({
      name: 'High Supply',
      url: 'https://www.google.com',
      createdAt: new Date(),
    });
  }

  await createBrandsTable();
  await createBrands();
  console.log('Created Brands table and seeded');
}

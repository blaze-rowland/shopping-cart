import { SqlService } from '@forty-boy/sql';
import { AmountUnitTable } from './amountUnit.table';

export async function amountUnitSeeder() {
  const amountUnitTable = new AmountUnitTable('amountUnits');

  async function createTable() {
    const sqlService = new SqlService(amountUnitTable.tableName);
    await sqlService.createTableQuery([
      {
        name: 'id',
        type: 'INT',
        size: 11,
        nullable: false,
        primaryKey: true,
        autoIncrement: true,
      },
      {
        name: 'name',
        type: 'VARCHAR',
        size: 255,
        nullable: false,
      },
      {
        name: 'shortName',
        type: 'VARCHAR',
        size: 5,
        nullable: true,
      },
    ]);
  }

  async function createAmountUnits() {
    amountUnitTable.add({
      name: 'Grams',
      shortName: 'g',
    });

    amountUnitTable.add({
      name: 'Milligrams',
      shortName: 'mg',
    });

    amountUnitTable.add({
      name: 'Ounce',
      shortName: 'oz',
    });
  }

  await createTable();
  await createAmountUnits();
  console.log('Created AmountUnits table and seeded');
}

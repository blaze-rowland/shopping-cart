import { SqlService } from '@forty-boy/sql';
import { UnitTable } from './unit.table';

export async function unitSeeder() {
  const unitTable = new UnitTable('units');

  async function createTable() {
    const sqlService = new SqlService(unitTable.tableName);
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

  async function createUnits() {
    unitTable.add({
      name: 'Grams',
      shortName: 'g',
    });

    unitTable.add({
      name: 'Milligrams',
      shortName: 'mg',
    });

    unitTable.add({
      name: 'Ounce',
      shortName: 'oz',
    });

    unitTable.add({
      name: 'Pound',
      shortName: 'lb',
    });
  }

  await createTable();
  await createUnits();
  console.log('Created AmountUnits table and seeded');
}

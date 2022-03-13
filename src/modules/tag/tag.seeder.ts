import { SqlService } from '@forty-boy/sql';
import { tagTable } from '../../database';

export async function tagSeeder() {
  async function createTagsTable() {
    const sqlService = new SqlService(tagTable.tableName);

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
        name: 'createdAt',
        type: 'DATETIME',
        nullable: false,
      },
    ]);
  }

  async function createTags() {
    tagTable.add({
      name: 'Hybrid',
      createdAt: new Date(),
    });

    tagTable.add({
      name: 'Indica',
      createdAt: new Date(),
    });

    tagTable.add({
      name: 'Sativa',
      createdAt: new Date(),
    });

    tagTable.add({
      name: 'CBD',
      createdAt: new Date(),
    });
  }

  await createTagsTable();
  await createTags();
  console.log('Created Tags table and seeded');
}

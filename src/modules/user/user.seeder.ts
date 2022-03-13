import { SqlService } from '@forty-boy/sql';
import { UserTable } from './user.table';
import bcrypt from 'bcrypt';

async function hash(password: string): Promise<string> {
  return new Promise((resolve: any, reject: any) => {
    try {
      bcrypt.genSalt(10, (errSalt, salt) => {
        if (errSalt) reject(errSalt);
        bcrypt.hash(password, salt, (errHash, hash) => {
          if (errHash) reject(errHash);
          resolve(hash);
        });
      });
    } catch (err) {
      reject(err);
    }
  });
}

export async function userSeeder() {
  const userTable = new UserTable('users');

  async function createUsersTable() {
    const sqlService = new SqlService(userTable.tableName);
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
        name: 'firstName',
        type: 'VARCHAR',
        size: 255,
        nullable: false,
      },
      {
        name: 'lastName',
        type: 'VARCHAR',
        size: 255,
        nullable: false,
      },
      {
        name: 'email',
        type: 'VARCHAR',
        size: 255,
        nullable: false,
        unique: true,
      },
      {
        name: 'password',
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

  async function createUsers() {
    userTable.add({
      firstName: 'Blaze',
      lastName: 'Rowland',
      email: 'test1@gmail.com',
      password: await hash('testing'),
      createdAt: new Date(),
    });

    userTable.add({
      firstName: 'Rylee',
      lastName: 'Rowland',
      email: 'test2@gmail.com',
      password: await hash('testing'),
      createdAt: new Date(),
    });

    userTable.add({
      firstName: 'Forrest',
      lastName: 'Rowland',
      email: 'test3@gmail.com',
      password: await hash('testing'),
      createdAt: new Date(),
    });

    userTable.add({
      firstName: 'Paul',
      lastName: 'Brodhead',
      email: 'test4@gmail.com',
      password: await hash('testing'),
      createdAt: new Date(),
    });
  }

  await createUsersTable();
  await createUsers();
  console.log('Created Users table and seeded');
}

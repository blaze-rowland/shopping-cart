import Forty from '@forty-boy/sql/lib';

export class UserSchema {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt: Date
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
  }
}

export type UserDataset = Array<UserSchema>;

export class UserTable extends Forty.Table<UserSchema> {
  constructor(tableName: string, users: UserDataset = []) {
    super(tableName, UserSchema, users);
  }
}

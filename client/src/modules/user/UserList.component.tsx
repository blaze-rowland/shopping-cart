import { User } from './User.component';

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
}

export function UserList(users: Array<IUser>) {
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

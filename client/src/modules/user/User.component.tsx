import { IUser } from './UserList.component';

function getFullName(user: IUser): string {
  return `${user.firstName} ${user.lastName}`;
}

export function User(user: IUser) {
  return (
    <tr>
      <td>{getFullName(user)}</td>
      <td>{user.email}</td>
      <td>{user.createdAt}</td>
    </tr>
  );
}

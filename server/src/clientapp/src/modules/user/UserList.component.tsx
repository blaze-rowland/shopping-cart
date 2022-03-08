import { User } from './User.component';
import { UserSchema } from '../../../../modules/user/user.table';
import { useEffect, useState } from 'react';

interface UserListProps {}

export const UserList: React.FC<UserListProps> = (props) => {
  const [users, setUsers] = useState<Array<UserSchema>>([]);

  useEffect(() => {
    if (!users?.length) getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch('http://localhost:8000/api/v1/users');
    const users = await response.json();

    setUsers(users);
  };

  const userComponent = users.map((user) => <User key={user.id} user={user} />);

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
        <tbody>{userComponent}</tbody>
      </table>
    </div>
  );
};

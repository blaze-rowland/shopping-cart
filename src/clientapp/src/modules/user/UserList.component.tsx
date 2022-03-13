import { User } from './User.component';
import { UserSchema } from '../../../../modules/user/user.table';
import { useEffect, useState } from 'react';
import { Loading } from '../../shared/components/Loading.component';
import { CardList } from '../../shared/styles/Card.style';

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

  return users?.length ? <CardList>{userComponent}</CardList> : <Loading />;
};
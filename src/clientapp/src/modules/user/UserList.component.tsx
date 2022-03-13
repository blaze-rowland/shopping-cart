import { User } from './User.component';
import { UserDataset } from '../../../../modules/user/user.table';
import { useEffect, useState } from 'react';
import { Loading } from '../../shared/components/Loading/Loading.component';
import { CardList } from '../../shared/styles/Card.style';
import { HttpService } from '../../shared/services/http.service';
import { Container } from '../../layout/Container/Container.style';

interface UserListProps {}

export const UserList: React.FC<UserListProps> = (props) => {
  // Globals
  const userService = new HttpService(
    `${process.env.REACT_APP_SERVER_URL}/users`
  );

  // State
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserDataset>([]);

  useEffect(() => {
    if (!users?.length) getUsers();
  });

  const getUsers = async () => {
    userService
      .get<UserDataset>()
      .subscribe((response) => initializeUsers(response));
  };

  const initializeUsers = (users: UserDataset) => {
    setLoading(false);
    setUsers(users);
  };

  // Methods
  const userComponent = users.map((user) => <User key={user.id} user={user} />);

  return loading ? (
    <Loading />
  ) : (
    <Container hasMarginTop={true}>
      <CardList>{userComponent}</CardList>
    </Container>
  );
};

import React from 'react';
import { UserSchema } from '../../../../modules/user/user.table';
import { Card, CardBody, CardHeader } from '../../shared/styles/Card.style';
import { DateFormat, formatDate } from '../../utilities/date.util';

function getFullName(user: UserSchema): string {
  return `${user.firstName} ${user.lastName}`;
}

interface UserProps {
  user: UserSchema;
}

export const User: React.FC<UserProps> = (props) => {
  return (
    <Card>
      <CardHeader>
        <h2>{getFullName(props.user)}</h2>
        <p>{formatDate(props.user.createdAt, DateFormat.MMDDYYYY)}</p>
      </CardHeader>
      <CardBody>
        <p style={{ margin: '0px' }}>{props.user.email}</p>
      </CardBody>
    </Card>
  );
};

import React from 'react';
import { UserSchema } from '../../../../modules/user/user.table';
import { DateFormat, formatDate } from '../../utilities/date.util';

function getFullName(user: UserSchema): string {
  return `${user.firstName} ${user.lastName}`;
}

interface UserProps {
  user: UserSchema;
}

export const User: React.FC<UserProps> = (props) => {
  return (
    <tr>
      <td>{getFullName(props.user)}</td>
      <td>{props.user.email}</td>
      <td>{formatDate(props.user.createdAt, DateFormat.MMDDYYYY)}</td>
    </tr>
  );
};

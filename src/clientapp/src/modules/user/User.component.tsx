import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { UserSchema } from '../../../../modules/user/user.table';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImage,
} from '../../shared/styles/Card.style';
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
      <div
        style={{
          color: 'var(--color-gray-400)',
          display: 'flex',
          justifyContent: 'center',
          padding: '1em',
        }}
      >
        <FontAwesomeIcon
          style={{
            height: '3em',
          }}
          icon={faUser}
        />
      </div>
      <CardHeader style={{ justifyContent: 'center' }}>
        <h2>{getFullName(props.user)}</h2>
      </CardHeader>
      <CardBody style={{ textAlign: 'center' }}>
        <p style={{ margin: '0px' }}>{props.user.email}</p>
      </CardBody>
      <CardFooter>
        <p>Created: {formatDate(props.user.createdAt, DateFormat.MMDDYYYY)}</p>
      </CardFooter>
    </Card>
  );
};

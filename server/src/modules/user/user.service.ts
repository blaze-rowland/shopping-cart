import { UserDataset } from './user.table';
import { Subject, Observable } from 'rxjs';
import { userTable } from '../../database';

export class UserService {
  constructor() {}

  public getAll(): Observable<UserDataset> {
    return userTable.find();
  }
}

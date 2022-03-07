import { UserDataset } from './user.table';
import { Subject, Observable } from 'rxjs';
import { userTable } from '../../database';

export class UserService {
  constructor() {}

  public getAll(): Observable<UserDataset> {
    const response = new Subject<UserDataset>();
    userTable.find().subscribe((users) => response.next(users));
    return response.asObservable();
  }
}

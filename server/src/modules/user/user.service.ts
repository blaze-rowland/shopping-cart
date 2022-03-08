import { UserDataset, UserSchema } from './user.table';
import { Observable, Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { userTable } from '../../database';
import { DatabaseService } from '../../database/database.service';

export class UserService {
  private _databaseService = new DatabaseService();
  constructor() {}

  public getAll(): Observable<UserDataset> {
    return userTable.find();
  }

  public get(id: number): Observable<UserSchema> {
    return userTable.findOne({ columns: ['*'], condition: { id } });
  }

  public create(user: UserSchema): Observable<any> {
    return this._databaseService.hashPassword(user.password).pipe(
      map((password) =>
        userTable.add({
          ...user,
          password,
        })
      )
    );
  }
}

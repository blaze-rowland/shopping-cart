import { UserDataset, UserSchema } from './user.table';
import { Observable } from 'rxjs';
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

  public async create(user: UserSchema): Observable<void> {
    const hash = await this._databaseService.hashPassword(user.password);
    return new Observable();
  }
}

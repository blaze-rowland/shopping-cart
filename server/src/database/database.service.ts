import { defer, from, Observable } from 'rxjs';
import bcrypt from 'bcrypt';

export class DatabaseService {
  constructor() {}

  public hashPassword(password: string): Observable<any> {
    const response = new Promise((resolve: any, reject: any) => {
      try {
        bcrypt.genSalt(10, (errSalt, salt) => {
          if (errSalt) reject(errSalt);

          bcrypt.hash(password, salt, (errHash, hash) => {
            if (errHash) reject(errHash);
            resolve(hash);
          });
        });
      } catch (err) {
        reject(err);
      }
    });

    return defer(() => from(response));
  }
}

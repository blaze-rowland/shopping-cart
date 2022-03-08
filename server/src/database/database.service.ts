import bcrypt from 'bcrypt';

export class DatabaseService {
  constructor() {}

  public async hashPassword(password: string): Promise<string> {
    return new Promise((resolve: any, reject: any) => {
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
  }
}

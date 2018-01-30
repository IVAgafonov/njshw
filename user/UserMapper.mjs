import {Db} from '../db/mysql.mjs';
import {User} from '../user/User.mjs';

export class UserMapper {
    constructor(dbConfig) {
        this._db = new Db(dbConfig);
        this._user = new User();
    }
    getUserByLoginCredential(login, credential) {
        let userData = this._db.getRow(`SELECT * FROM \`njshw_users\` WHERE Email = '${login}' AND Credential = md5('${credential}')`);
        return new Promise((resolve, reject) => {
            userData.then((userData) => {
                if (userData) {
                    this._user.id = userData.Id;
                    this._user.email = userData.Email;
                    this._user.name = userData.Name;
                    this._user.surname = userData.Surname;
                    this._user.credential = userData.Credential;
                    this._user.isDeleted = userData.IsDeleted;
                    this._user.createDate = userData.CreateDate;
                    this._user.deleteDate = userData.DeleteDate;
                    this._user.role = userData.Role;
                }
                resolve(this._user);
            }, (error) => {
                reject(error);
            });
        });
    }
}
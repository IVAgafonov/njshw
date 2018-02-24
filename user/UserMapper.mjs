import {Db} from '../db';
import {User} from './';

export default class UserMapper {
    constructor() {
        this._db = new Db(0);
    }
    getUserByLoginCredential(login, credential) {
        let userData = this._db.getRow(`SELECT * FROM \`njshw_users\` WHERE Email = '${login}' AND Credential = md5('${credential}')`);
        return new Promise((resolve, reject) => {
            userData.then((userData) => {
                let user = new User();
                if (userData) {
                    user.id = userData.Id;
                    user.email = userData.Email;
                    user.name = userData.Name;
                    user.surname = userData.Surname;
                    user.credential = userData.Credential;
                    user.isDeleted = userData.IsDeleted;
                    user.createDate = userData.CreateDate;
                    user.deleteDate = userData.DeleteDate;
                    user.role = userData.Role;
                }
                resolve(user);
            }, (error) => {
                reject(error);
            });
        });
    }
}
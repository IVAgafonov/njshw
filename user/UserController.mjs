import {UserMapper} from './UserMapper.mjs'
import {SessionMapper} from '../session/SessionMapper.mjs'

export class UserController {
    constructor(dbConfig) {
        this._dbConfig = dbConfig;
    }
    login(login, credential) {
        let user = new UserMapper(this._dbConfig).getUserByLoginCredential(login, credential);
        return new Promise((resolve, reject) => {
            user.then((user) => {
                if (user.id) {
                    let sessionMapper = new SessionMapper(this._dbConfig);
                    let session = sessionMapper.createNewSession(user.id);
                    session.then((session) => {
                        resolve(session);
                    }, (error) => {
                        reject(error);
                    })
                } else {
                    reject({status: 404, message: 'User not found.'})
                }
            }, (error) => {
                reject(error);
            })
        });
    }
}
import {Db} from '../db';
import {Session} from './';


export default class SessionMapper {
    constructor(config) {
        this._db = new Db(0);
        this._config = config;
    }
    getSessionByUserId(userId) {
        let session = this._db.getRow(`SELECT * FROM \`njshw_sessions\` WHERE UserId = ${userId}`);
        return new Promise((resolve, reject) => {
            session.then((sessionData) => {
                let session = new Session();
                if (sessionData) {
                    session.id = sessionData.Id;
                    session.userId = sessionData._UserId;
                    session.session = sessionData.Session;
                    session.expireDate = sessionData.ExpireDate;
                }
                resolve(session);
            }, (error) => {
                reject(error);
            });
        });
    }
    createNewSession(userId) {
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let rand = '';
        for (let i = 0; i < 64; i++) {
            rand += str.charAt(Math.floor(Math.random() * str.length));
        }
        let date = new Date();
        date.setMinutes(date.getMinutes() + this._config.app.sessionTimeout);

        let newSession = this._db.insertRow(`INSERT INTO \`njshw_sessions\` 
            SET UserId = ${userId}, Session = '${rand}', ExpireDate = '${date.toISOString().replace(/T/, ' ').replace(/\..+/, '')}' 
            ON DUPLICATE KEY UPDATE Session = '${rand}', ExpireDate = '${date.toISOString().replace(/T/, ' ').replace(/\..+/, '')}'`);

        return new Promise((resolve, reject) => {
            newSession.then((insertId) => {
                if (insertId) {
                    resolve({
                        token: rand,
                        expireDate: date.toISOString().replace(/T/, ' ').replace(/\..+/, '')
                    });
                } else {
                    reject("Can't insert session data.");
                }
            }, (error) => {
                reject(error);
            })
        });
    }

}
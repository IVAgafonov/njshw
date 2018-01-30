import mysql from 'mysql';

export class Db {
    constructor(config) {
        this._host = config['host'];
        this._database = config['database'];
        this._user = config['user'];
        this._password = config['password'];
        this._db = mysql.createConnection({
            host: this._host,
            user: this._user,
            password: this._password,
            database: this._database
        });
        this._db.connect();
    }
    getRow(query) {
        return new Promise((resolve, reject) => {
            this._db.query(query, (err, rows, fields) => {
                if (err) {
                     reject({status: 500, message: "Mysql error. Can't read from db."});
                }
                resolve(rows[0]);
            });
        });
    }
    getRows(query) {
        return promise = new Promise((resolve, reject) => {
            this._db.query(query, (err, rows, fields) => {
                if (err) {
                    reject({status: 500, message: "Mysql error. Can't read from db."});
                }
                resolve(rows);
            });
        });
    }
    insertRow(query, params) {
        return new Promise((resolve, reject) => {
            this._db.query(query, params,(err, result, fields) => {
                if (err || !result) {
                    reject({status: 500, message: "Mysql error. Can't insert into db."});
                }
                if (result.insertId) {
                    resolve(result.insertId);
                }
            });
        });
    }
}
import mysql from 'mysql';
import config from '../config';

export default class MysqlDb {
    constructor(instanceId) {
        if (!MysqlDb.instances) {
            MysqlDb.instances = {};
        }
        if (!config.db[instanceId]) {
            throw new Error('Unknown db instance');
        }
        if (MysqlDb.instances[instanceId]) {
            return MysqlDb.instances[instanceId];
        }
        this._host = config.db[instanceId]['host'];
        this._database = config.db[instanceId]['database'];
        this._user = config.db[instanceId]['user'];
        this._password = config.db[instanceId]['password'];
        this._db = mysql.createConnection({
            host: this._host,
            user: this._user,
            password: this._password,
            database: this._database
        });
        this._db.connect();
        MysqlDb.instances[instanceId] = this;
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
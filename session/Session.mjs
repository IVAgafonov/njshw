
export default class Session {
    constructor() {
        this._id = 0;
        this._userId = 0;
        this._session = '';
        this._expireDate = '0000-00-00 00:00:00';
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get userId() {
        return this._userId;
    }
    set userId(userId) {
        this._userId = userId;
    }
    get session() {
        return this._session;
    }
    set session(session) {
        this._session = session;
    }
    get expireDate() {
        return this._expireDate;
    }
    set expireDate(expireDate) {
        this._expireDate = expireDate;
    }
}
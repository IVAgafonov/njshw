export class User {
    constructor() {
        this._id = 0;
        this._name = 'Guest';
        this._email = '-';
        this._surname = '';
        this._credential = '';
        this._isDeleted = 0;
        this._createDate = '0000-00-00 00:00:00';
        this._deleteDate = '0000-00-00 00:00:00';
        this._role = 0;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get surname() {
        return this._surname;
    }
    set surname(surname) {
        this._surname = surname;
    }
    get credential() {
        return this._credential;
    }
    set credential(credential) {
        this._credential = credential;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(isDeleted) {
        this._isDeleted = isDeleted;
    }
    get createDate() {
        return this._createDate;
    }
    set createDate(createDate) {
        this._createDate = createDate;
    }
    get deleteDate() {
        return this._deleteDate;
    }
    set deleteDate(deleteDate) {
        this._deleteDate = deleteDate;
    }
    get role() {
        return this._role;
    }
    set role(role) {
        this._role = role;
    }
}
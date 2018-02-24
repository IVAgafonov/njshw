
export default class User {
    constructor() {
        this.id = 0;
        this.name = 'Guest';
        this.email = '-';
        this.surname = '';
        this.credential = '';
        this.isDeleted = 0;
        this.createDate = '0000-00-00 00:00:00';
        this.deleteDate = '0000-00-00 00:00:00';
        this.role = 0;
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
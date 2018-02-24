
export default class Battle {
    constructor() {
        this.id = 0;
        this.teamA = 0;
        this.teamB = 0;
        this.status = 'PREPARE';
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get teamA() {
        return this._teamA;
    }
    set teamA(teamA) {
        this._teamA = teamA;
    }
    get teamB() {
        return this._teamB;
    }
    set teamB(teamB) {
        this._teamB = teamB;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
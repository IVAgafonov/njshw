
import {Battle} from './';

export default class BattleMapper {
    constructor() {
        this._db = new Db(0);
    }
    getActiveBattleByUserId(userId) {
        let battleData = this._db.getRow(`SELECT * FROM \`njshw_battles\` WHERE teamA = '${userId}' AND Status != 'COMPLETE'`);
        return new Promise((resolve, reject) => {
            battleData.then((battleData) => {
                let battle = new Battle();
                if (battleData) {
                    battle.id = battleData.Id;
                    battle.teamA = battleData.TeamA;
                    battle.teamB = battleData.TeamB;
                    battle.status = battleData.Status;
                }
                resolve(battle);
            }, (error) => {
                reject(error);
            });
        });
    }
}
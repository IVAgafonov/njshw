import {UserMapper} from './'
import {SessionMapper} from '../session'

export default class UserController {
    constructor(req, res, config) {
        this.config = config;
        this.req = req;
        this.res = res;
    }
    get config() {
        return this._config;
    }
    set config(config) {
        this._config = config;
    }
    get req() {
        return this._req;
    }
    set req(req) {
        this._req = req;
    }
    get res() {
        return this._res;
    }
    set res(res) {
        this._res = res;
    }
    login(login, credential) {
        let user = new UserMapper(this.config).getUserByLoginCredential(login, credential);
        user.then((user) => {
            if (user.id) {
                let sessionMapper = new SessionMapper(this.config);
                let session = sessionMapper.createNewSession(user.id);
                session.then((session) => {
                    if (session.token.length) {
                        this.res.status(200);
                    } else {
                        this.res.status(403);
                    }
                    this.res.json(session);
                    this.res.end();
                }, (error) => {
                    this.res.status(500).json({message: "Error. Can't create new session"});
                    this.res.end();
                })
            } else {
                this.res.status(404).json({message: 'User not found.'});
                this.res.end();
            }
        }, function (error) {
            this.res.status(500).json({message: "Error. Can't read user"});
            this.res.end();
        });
    };

}
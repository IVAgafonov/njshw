
import {UserController} from '../user';
import {TelegramBotController} from '../telegramBot';
import bodyParser from 'body-parser';

//temporary


export default class Router {
    constructor(app, config) {
        this.app = app;
        this.config = config;
    }
    get app() {
        return this._app;
    }
    set app(app) {
        this._app = app;
    }
    get config() {
        return this._config;
    }
    set config(config) {
        this._config = config;
    }
    init() {
        this._app.use(bodyParser.urlencoded());
        this._app.use(bodyParser.json());
        this._app.get('/user/login', (req, res) => {
            let login = req.query.login ? req.query.login : req.params.login;
            let credential = req.query.credential ? req.query.credential : req.params.credential;
            let userController = new UserController(req, res, this._config);
            userController.login(login, credential);
            return 0;
        });
        this._app.post('/bot', (req, res, next) => {
            let telegramBotController = new TelegramBotController(req, res, this._config);

            /*
            if (message.text.slice(0, 7) === '/battle') {

                telegramBotController.createBattle();
            }

            if (message.text.slice(0, 5) === '/join') {
                telegramBotController.joinBattle();
            }

            if (text) {
                request({
                    uri: 'https://api.telegram.org/bot536749841:AAGruI0xrGPZ4JDt1-KFGlBT0F4nUvyiFVQ/sendMessage',
                    body: JSON.stringify({
                        chat_id: message.chat.id,
                        text: text
                    }),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }}, function (error, response) {
                    if (photo) {
                        request({
                            uri: 'https://api.telegram.org/bot536749841:AAGruI0xrGPZ4JDt1-KFGlBT0F4nUvyiFVQ/sendPhoto',
                            body: JSON.stringify({
                                chat_id: message.chat.id,
                                photo: photo
                            }),
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            }}, function (error, response) {
                        });
                    }
                });
            }

            res.status(200);
            res.end();
            */
        });
        this._app.listen(7881, function () {
            console.log('Application run. ' + new Date() + new Date().toISOString());
        });
    }
}/**
 * Created by igor on 05.02.2018.
 */

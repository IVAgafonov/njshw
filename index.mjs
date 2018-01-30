import {config} from './config';
import express from 'express';
import {UserController} from './user/UserController.mjs'

let app = express();

app.get('/user/login', (req, res) => {
    let login = req.query.login ? req.query.login : req.params.login;
    let credential = req.query.credential ? req.query.credential : req.params.credential;
    let userController = new UserController(config.db[0]);
    let result = userController.login(login, credential);
    result.then((resolve) => {
        if (resolve.status === 'ok' && resolve.token.length) {
            res.status(200);
        } else {
            res.status(403);
        }
        res.json(resolve);
        res.end();
    }, (reject) => {
        res.status(reject.status).json({message: reject.message});
        res.end();
    });
    return 0;
});

app.listen(7881, function () {
    console.log('Example app listening on port 7881!');
});
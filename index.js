let http = require('http');

http.createServer((request, response) => {
    console.log(request.url);
    response.end(JSON.stringify({
        status: "ok"
    }));
}).listen('7889', (err) => {
    if (err) {
        return console.log("Can't start server.".err);
    }
    console.log("Server is listening 7889 port");
});
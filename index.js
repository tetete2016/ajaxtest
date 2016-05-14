var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/serverside', function (request, response) {
    console.log(request.query);
    response.send(JSON.stringify(request.query));
});

app.post('/highscore', function (request, response) {
    console.log("POST " + JSON.stringify(request.query));
    response.send("score sent!!");
});

app.get('/highscore', function (request, response) {
    console.log("GET " + JSON.stringify(request.query));
    response.send("score");
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});



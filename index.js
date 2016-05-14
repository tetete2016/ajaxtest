var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/serverside', function (request, response) {
    console.log(request.query);
    response.send(JSON.stringify(request.query));
});

app.post('/highscore', function (request, response) {
    console.log(request.body);
    response.send("score sent!!");
});

app.get('/highscore', function (request, response) {
    console.log(request.body);
    response.send("score");
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});



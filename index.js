var express = require('express');
var app = express();
var x = 0;

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/serverside', function (request, response) {
    response.send(x);
    x++;
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



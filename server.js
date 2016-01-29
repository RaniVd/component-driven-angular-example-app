var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5005));

app.use(express.static(__dirname + '/www'));

// views is directory for all template files
app.set('views', __dirname + '/www');

app.get('/', function(request, response) {
    response.render('www/index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
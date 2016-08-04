var express = require('express')
var calc = require('./calc.js');
var app = express();
var fs = require('fs');
app.use('/static', express.static(__dirname
	));


app.get('/', function(req, res){

 
	// res.send('Hello' + calc.add(8,9));
	 res.send(fs.readFileSync('./index.html', 'UTF-8'));
    // res.sendFile(__dirname + '/index.html');


});
app.get('/test', function(req, res){res.send('Yes, this is a surprise');
});
app.listen(8042, function(err) {
   console.log('listening on port 5566');
});

    //console.log( calc.add(8, 9) );
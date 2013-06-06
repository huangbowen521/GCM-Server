var express = require('express');
var app = express();
var gcmSender = require('./gcm');

app.get('/', function(req, res) {
   res.send("Hello, it works! visit /ap/open to open ap, visit /ap/close to close ap.");
});

app.get('/ap/open', function(req, res) {
   gcmSender.send('open', function(result) {
       res.send(result);
   });
});

app.get('/ap/close', function(req, res) {
    gcmSender.send('close', function(result) {
        res.send(result);
    })
})


app.listen(9000);
console.log('Listening on port 9000');
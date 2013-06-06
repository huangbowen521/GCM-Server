var express = require('express');
var app = express();
var gcmSender = require('./gcm');

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


app.listen(3001);
console.log('Listening on port 3001');
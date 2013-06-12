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
});

app.post('/register', function (req, res) {
    var registerStorage = require('./registerStorage');
//    registerStorage.save(req.params);
//    console.log(req);
    console.log("dddd");
    res.send('ddddd');
});

app.post('/unregister', function(req,res) {
   console.log('success');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});

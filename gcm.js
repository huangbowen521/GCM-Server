var gcm = require('node-gcm');
var registerStorage = require('./registerStorage');
var sender = new gcm.Sender('AIzaSyAw31eeTS1CKtFFAfkVqSPlAG6AESKe4VM');
var registrationIds = registerStorage.getIds();


var gcmSender = {};
gcmSender.send = function(msg, callback) {
    var message = new gcm.Message();
    message.addDataWithKeyValue('message',msg);
    message.collapseKey = 'demo';
    message.delayWhileIdle = true;
    message.timeToLive = 3;
    sender.send(message, registrationIds, 4, function (err, result) {
        callback(result);
        console.log(result);
    });
};

module.exports = gcmSender;
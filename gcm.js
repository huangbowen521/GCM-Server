var gcm = require('node-gcm');

var sender = new gcm.Sender('AIzaSyAw31eeTS1CKtFFAfkVqSPlAG6AESKe4VM');
var registrationIds = [ ];

registrationIds.push('APA91bFNnbdMN44rdqunPJdu7WLGGbRFiTTOz-XB4LVIyKMUqsGPNSQY707HUuChK8PzWqamiJy_eYDvcMOsRrRAEySgkKKFXjBR-IEWH2jOpfSChCe54subuu2mBzIEyyvzvjbPFCSaeyWaJn5mzJR1ebiHfa1FpUHcSOjXX7i9UgC3VbkW3fM');

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
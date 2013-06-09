/**
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 6/9/13
 * Time: 4:23 PM
 */

var fs = require('fs');

var outputFilename = __dirname + '/ids.json';

var registerStorage = {};

registerStorage.save = function (val) {

    var IDs = registerStorage.getIds();

    var exists = false;

    for (var i = 0; i < IDs.length; i++) {
        if (IDs[i] === val) {
            exists = true;
        }
    }

    if (!exists) {
        IDs.push(val);
    }

    fs.writeFile(outputFilename, JSON.stringify(IDs), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + outputFilename);
        }
    });
};

registerStorage.getIds = function () {

    var content = require(outputFilename);
    return content;
}

module.exports = registerStorage;






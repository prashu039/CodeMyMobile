const mysql = require('mysql');

const config = require('config');

var connection = (function () {
    var instance;
    var databaseConfig = config.get('databaseConfig.mysql');
    function createInstance() {
        var connectionObj = mysql.createConnection(databaseConfig);
        connectionObj.connect()
        return connectionObj;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports.connection = connection;
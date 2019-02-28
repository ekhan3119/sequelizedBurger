var connection = require("./connection");

var orm = {
    selectAll: function (cb) {
        connection.query("SELECT burger_menu", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    }

};


module.exports = orm;
var mysql = require('mysql');
var db = require('../credentials/db_credentials');
var JSONsnacks = require('./snacks.json');
var snack = {};

snack.getAll = function(callback) {
    var connection = getConnection();
    connection.query('SELECT s.id, s.description, s.name, b.name AS brand_name, k.name AS kind_name FROM snacks AS s INNER JOIN brand AS b INNER JOIN kind AS k ON b.id = s.brand_id AND k.id = s.kind_id', function(err, rows, fields) {
        Snack = [];
        for (var i = 0; i < rows.length; i++) {
            var s = rows[i];
            var snackObject = {
                name: s.name,
                description: s.description,
                brandName: s.brand_name,
                kindName: s.kind_name
            };
            Snack.push(snackObject);
        }
        callback(Snack);
    });
};

function getConnection() {
    return mysql.createConnection({
        host: db.host,
		user: db.user,
		password: db.password,
		database: db.database
    });
}

module.exports = snack;

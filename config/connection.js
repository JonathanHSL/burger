var mysql = require('mysql');
var connection = mysql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'burgers_db'

})


connection.connect(function(err){
    console.log(err)
    if(err)throw err;
    console.log("connected as id: "+connection.threadId);
})

module.exports = connection;
const mysql = require('mysql2');

// Create a connection to the database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Lachhi@143',
  database: 'node-complete'
});

module.exports=pool.promise();
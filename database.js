//database.js
const mysql = require('mysql2');

//สร้างฐานการเซื่อมต่อ
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mini_project_db',
});

db.connect((err) => {
    if (err) {
        console.error ('Error connecting to the database', err.stack);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;
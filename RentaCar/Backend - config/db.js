const mysql = require('mysql');

// Crear conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'concesionario'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Base de datos conectada');
});

module.exports = db;

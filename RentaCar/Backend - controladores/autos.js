const db = require('../config/db');

// Obtener todos los autos
exports.getAutos = (req, res) => {
  const { concesionarioId } = req.query;
  let query = 'SELECT * FROM autos';
  if (concesionarioId) {
    query += ` WHERE concesionario_id = ${concesionarioId}`;
  }
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
};

// Agregar un nuevo auto
exports.addAuto = (req, res) => {
  const { marca, modelo, año, color, concesionario_id, precio, estado } = req.body;
  const query = 'INSERT INTO autos (marca, modelo, año, color, concesionario_id, precio, estado) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [marca, modelo, año, color, concesionario_id, precio, estado], (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: 'Auto agregado' });
  });
};

// Actualizar un auto
exports.updateAuto = (req, res) => {
  const { id } = req.params;
  const { marca, modelo, año, color, concesionario_id, precio, estado } = req.body;
  const query = 'UPDATE autos SET marca=?, modelo=?, año=?, color=?, concesionario_id=?, precio=?, estado=? WHERE id=?';
  db.query(query, [marca, modelo, año, color, concesionario_id, precio, estado, id], (err, result) => {
    if (err) throw err;
    res.status(200).json({ message: 'Auto actualizado' });
  });
};

// Eliminar un auto
exports.deleteAuto = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM autos WHERE id=?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json({ message: 'Auto eliminado' });
  });
};

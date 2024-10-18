import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConcesionariosPage = () => {
  const [concesionarios, setConcesionarios] = useState([]);

  useEffect(() => {
    axios.get('/api/concesionarios')
      .then((res) => {
        setConcesionarios(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Concesionarios</h1>
      <ul>
        {concesionarios.map(concesionario => (
          <li key={concesionario.id}>{concesionario.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConcesionariosPage;

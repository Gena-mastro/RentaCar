import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const AutosPage = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    axios.get('/api/autos')
      .then((res) => {
        setAutos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'marca', headerName: 'Marca', width: 130 },
    { field: 'modelo', headerName: 'Modelo', width: 130 },
    { field: 'año', headerName: 'Año', width: 90 },
    { field: 'color', headerName: 'Color', width: 110 },
    { field: 'precio', headerName: 'Precio', width: 130 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Listado de Autos</h1>
      <DataGrid rows={autos} columns={columns} pageSize={5} />
    </div>
  );
};

export default AutosPage;

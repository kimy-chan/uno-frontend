import React, { useContext, useState } from 'react';
import { guardarCategoria } from './api/api';
import { AutenticacionContex } from './context';

export const AñadirCategoria = () => {
    const {token} = useContext(AutenticacionContex)
  const [nombre, setCategoria] = useState('');

  const handleChange = (e) => {
    setCategoria(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    guardarCategoria({token,nombre })
    .then((result) => {
         console.log(result);
         
    }).catch((err) => {
        
    });

  };

  return (
    <div className="container mt-5">
      <h2>Agregar Nueva Categoría</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoria">Nombre de la Categoría</label>
          <input
            type="text"
            className="form-control"
            id="categoria"
            name="categoria"
            value={nombre}
            onChange={handleChange}
            placeholder="Ingrese el nombre de la categoría"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Añadir Categoría</button>
      </form>
    </div>
  );
};

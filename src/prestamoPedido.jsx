import React, { useContext, useState } from 'react';
import { guardCliente } from './api/api';
import { AutenticacionContex } from './context';
import { PrestamoLibro } from './prestamoLibro';

export const PrestamoPedido = () => {
  const {token} = useContext(AutenticacionContex)
  const [formData, setFormData] = useState({
    ci: '',
    nombres: '',
    apellidos: '',
    direccion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    guardCliente({token, formData})
     .then((result) => {
        console.log(result);
        
     }).catch((err) => {
          console.log(err);
          
      
     });
      
    
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario de Préstamo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ci" className="form-label">CI:</label>
          <input
            type="text"
            id="ci"
            name="ci"
            className="form-control"
            value={formData.ci}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nombres" className="form-label">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            className="form-control"
            value={formData.nombres}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            className="form-control"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className="form-control"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>

      <br />
      <br />
      <br />
      {<PrestamoLibro/> }
    </div>
  );
};

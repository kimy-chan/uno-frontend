import React, { useContext, useEffect, useState } from 'react';
import { autenticacion, clientesApi, librosApi, prestarLibro } from './api/api';
import { AutenticacionContex } from './context';

export const PrestamoLibro = () => {
    const {token}=  useContext(AutenticacionContex)
  const [selectedLibro, setSelectedLibro] = useState('');
  const [selectedCliente, setSelectedCliente] = useState('');
    console.log(selectedCliente);
    
    const [libros, setLibro] = useState([]);
    const [clientes, setclientes] = useState([])

    useEffect(()=>{
          clientesApi({token})
          .then((result) => {
               
                
                setclientes(result)
                
          }).catch((err) => {
            
          });
          librosApi({token})
          .then((result) => {
                setLibro(result)
                
          }).catch((err) => {
            
          });
    },[token])

  const handleLibroChange = (e) => {
    setSelectedLibro(e.target.value);
  };

  const handleClienteChange = (e) => {
    setSelectedCliente(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
        console.log('cliente',selectedCliente);
        
        prestarLibro({token, selectedCliente,selectedLibro})
        .then((result) => {
                console.log(result);
                
        }).catch((err) => {
            console.log(err);
            
        });
        
       
        
        
    
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario de Préstamo de Libro</h2>
      <form onSubmit={handleSubmit}>
        {/* Select para Libro */}
        <div className="mb-3">
          <label htmlFor="libro" className="form-label">Seleccionar Libro:</label>
          <select
            id="libro"
            name="libro"
            className="form-select"
            value={selectedLibro}
            onChange={handleLibroChange}
            required
          >
            <option value="">Seleccione un libro</option>
            {libros.map((libro) => (
              <option key={libro._d} value={libro._id}>
                {`libro ${libro.titulo} idioma ${libro.idioma}`}
              </option>
            ))}
          </select>
        </div>

        {/* Select para Cliente */}
        <div className="mb-3">
          <label htmlFor="cliente" className="form-label">Seleccionar Cliente:</label>
          <select
            id="cliente"
            name="cliente"
            className="form-select"
            value={selectedCliente}
            onChange={handleClienteChange}
            required
          >
            <option value="">Seleccione un cliente</option>
            {clientes.map((cliente) =>{
                        
        return  (
              <option key={cliente._id} value={cliente._id}>
                {`${cliente.nombres } ${cliente.apellidos}`}
              </option>
            )
            }
            
            )}
          </select>
        </div>

        {/* Botón de Enviar */}
        <button type="submit" className="btn btn-primary">Prestar Libro</button>
      </form>
    </div>
  );
};

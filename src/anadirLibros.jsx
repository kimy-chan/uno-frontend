import React, { useContext, useEffect, useState } from 'react';
import { categoriasApi, guardaLibro } from './api/api';
import { AutenticacionContex } from './context';
import { Link } from 'react-router-dom';

export const AnadirLibros = () => {
    const [categoria, setcategoria] = useState([])
    const {token}= useContext(AutenticacionContex)
    useEffect(()=>{
        categoriasApi({token})
        .then((result) => {
                setcategoria(result)
                
        }).catch((err) => {
            
        });

    },[token])
  const [formData, setFormData] = useState({
    titulo: '',
    editorial: '',
    idioma: '',
    portada: '',
    cantidad: '',
    categoria: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
     guardaLibro({token, formData})
     .then((result) => {
        console.log(result);
        
     }).catch((err) => {
        console.log(err);
        
     });

  };

  return (
  
    <div className="container mt-5">
          <Link to={'/categoria'} >Categoria</Link>
      <h2>Agregar un Nuevo Libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Ingrese el título del libro"
          />
        </div>

        <div className="form-group">
          <label htmlFor="editorial">Editorial</label>
          <input
            type="text"
            className="form-control"
            id="editorial"
            name="editorial"
            value={formData.editorial}
            onChange={handleChange}
            placeholder="Ingrese la editorial"
          />
        </div>

        <div className="form-group">
          <label htmlFor="idioma">Idioma</label>
          <input
            type="text"
            className="form-control"
            id="idioma"
            name="idioma"
            value={formData.idioma}
            onChange={handleChange}
            placeholder="Ingrese el idioma"
          />
        </div>

        <div className="form-group">
          <label htmlFor="portada">Portada (URL)</label>
          <input
            type="text"
            className="form-control"
            id="portada"
            name="portada"
            value={formData.portada}
            onChange={handleChange}
            placeholder="Ingrese la URL de la portada"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            placeholder="Ingrese la cantidad de libros"
          />
        </div>

   <div className="form-group">
  <label htmlFor="categoria">Categoría</label>
  <select
    className="form-control"
    id="categoria"
    name="categoria"
    value={formData.categoria}
    onChange={handleChange}
  >
    {
        categoria.map((c)=>{
            return ( 
                    <option key={c._id} value={c._id}>{c.nombre}</option>
            )
        })
    }

   
  </select>
</div>


        <button type="submit" className="btn btn-primary">Añadir Libro</button>
      </form>
    </div>
  );
};

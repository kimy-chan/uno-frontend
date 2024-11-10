import React, { useContext, useEffect, useState } from 'react';
import { AutenticacionContex } from './context';
import { librosapi } from './api/api';
import { Link } from 'react-router-dom';

export const Libros = () => {
  const [l, setL] = useState([]);
  const { token } = useContext(AutenticacionContex);
  
  useEffect(() => {
    librosapi({ token })
      .then((result) => {
        setL(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div className="container mt-5">
      {/* Enlaces con estilo de botones */}
      <div className="mb-4">
        <Link to={'/anadir'} className="btn btn-success mr-3">Añadir Libro</Link>
        <Link to={'/pedidos'} className="btn btn-info">Ver Pedidos</Link>
      </div>

      <h2>Lista de Libros</h2>

      <div className="row">
        {l.map(libro => (
          <div className="col-md-4 mb-4" key={libro._id}>
            <div className="card shadow-sm" style={{ borderRadius: '10px' }}>
              <img
                src={libro.portada}
                className="card-img-top"
                alt={libro.titulo}
                style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{libro.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{libro.idioma}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import { pedidosListar } from './api/api'; // Asumimos que esta función obtiene los pedidos
import { AutenticacionContex } from './context';
import { Link } from 'react-router-dom';

export const Pedido = () => {
  const { token } = useContext(AutenticacionContex);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    pedidosListar({ token })
      .then((result) => {
        console.log(result);
        setPedidos(result); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div className="container mt-5">
         <Link to={'/prestamo'} className="btn btn-primary mt-3 mb-4">
        Realizar préstamo
      </Link>
      <h2>Detalles de los Pedidos</h2>

      {/* Verificamos si tenemos pedidos */}
      {pedidos.length > 0 ? (
        <div className="row">
          {pedidos.map((pedido) => (
            <div key={pedido._id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    {pedido.cliente.nombres} {pedido.cliente.apellidos}
                  </h5>
                  <p className="card-text">
                    <strong>CI:</strong> {pedido.cliente.ci} <br />
                    <strong>Dirección:</strong> {pedido.cliente.direccion}
                  </p>
                </div>

                <div className="card-body">
                  <h5>Libro Prestado</h5>
                  <div className="row">
                    {/* Mostrar los detalles del libro prestado */}
                    <div className="col-12">
                      <div className="card">
                        <img
                          src={pedido.libro.portada}
                          className="card-img-top"
                          alt={pedido.libro.titulo}
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                          <h6 className="card-title">{pedido.libro.titulo}</h6>
                          <p className="card-text">
                            <strong>Idioma:</strong> {pedido.libro.idioma}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay pedidos registrados.</p>
      )}
    </div>
  );
};

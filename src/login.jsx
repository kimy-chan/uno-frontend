import React, { useState } from 'react';
import { autenticacion } from './api/api';


export const Login = () => {
  const [username, setUsername] = useState('');
  const [contrasena, setPassword] = useState('');


  const handleSubmit = (event) => {
    
    event.preventDefault();
    autenticacion({username, contrasena})
    .then((result) => {
        if(result.status ==200){
             window.localStorage.setItem('token', result.token)
            window.location.href='/libros'

        }
        
        
    }).catch((err) => {
        console.log(err);
        
        
    });
    
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>

           

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ingresa tu correo electrónico"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={contrasena}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { AutenticacionContex } from './context';

export const AutenticacionProvider = ({ children }) => {
  const [autenticacion, setAutenticacion] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenLocal = window.localStorage.getItem('token');
    if (tokenLocal) {
      setAutenticacion(true); 
      setToken(tokenLocal);   
    } else {
      setAutenticacion(false); 
      setToken(null);          
    }
  }, []); 

  return (
    <AutenticacionContex.Provider value={{ autenticacion, token }}>
      {children}
    </AutenticacionContex.Provider>
  );
};

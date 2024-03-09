import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PruebaBusqueda() {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    setBusqueda(event.target.value);

  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`Guardando la búsqueda: "${busqueda}"`)
    console.log(`Guardando la búsqueda: "${busqueda}"`);
    

    // Puedes realizar otras acciones aquí, como enviar la búsqueda a una API
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    switch (busqueda) {
      case 'valor1':
        navigate("/Club1")
        break;
      case 'valor2':
        navigate("/Club2")
        break;
      default:
        navigate("/Club3")
    }
  };

  return (
    <div>
      <h1>Barra de búsqueda</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={busqueda} onChange={handleInputChange} placeholder="Introduce tu búsqueda" />
        <button type="submit" onClick={handleButtonClick}>Buscar</button>
      </form>
    </div>
  );
}

export default PruebaBusqueda;
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(null);

  function ObtenerFoto() {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        setImg(response.data[0].url);
        setError(null);
      })
      .catch((error) => {
        console.error(error.message);
        setImg(null);
        setError('Hubo un error. No hay imágen');
      });
  }

  return (
    <div>
      <h1>Fotos de gatos</h1>
      <button onClick={ObtenerFoto}>Nueva foto</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {img && <img src={img} alt="gatito" />}
    </div>
  );
}

export default App;

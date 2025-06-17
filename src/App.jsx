import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [img, setimg] = useState(null);

  function ObtenerFoto(){
      axios.get('https://api.thecatapi.com/v1/images/search')
      .then(function (response) {
      setimg(response.data[0].url);
      console.log(response);
    })
      .catch(function (error) {
      console.log(error.message);
    })
  }

  return (
    <div>
      <h1>Fotos de gatos</h1>
      <button onClick={ObtenerFoto}>Nueva foto</button>
      {}
      <img src={img}></img>
    </div>
  )
}

export default App

import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react';

const App = () => {

  const [show, setShow] = useState(true)

  const handleOnAdd = (cantidad) => {
    console.log("Se agregaron "+cantidad+" productos")
  }

  return (
    <div className="App">
    <NavBar/>
      <header className="container">
      <ItemListContainer greeting="Bienvenido"/>
        <h1>REACT - COMISION 31145</h1>  
      </header>     
      <div>
      <button onClick={() => setShow(!show)}>{show ? 'Desmontar Contador' : 'Montar Contador'}</button>
      { show ? <ItemCount stock={8} initial={0} onAdd={handleOnAdd}/> : null }
      </div> 
    </div>
);
}

export default App;

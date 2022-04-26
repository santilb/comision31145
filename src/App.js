import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import CartContext, { CartContextProvider } from './Context/CartContext';

const App = () => {

  {/*const [show, setShow] = useState(true)
  const handleOnAdd = (cantidad) => {
  console.log("Se agregaron "+cantidad+" productos")
  } */}

  return (
    <div className="App">
      <div className='container'>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path ='/' element={<ItemListContainer greeting="Bienvenido"/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path ={`/detail/:productId`} element={<ItemDetailContainer/>} />
                <Route path ={`/cart`} element={<Cart/>} />
                <Route path ='*' element={<h1>NOT FOUND 404</h1>}/>  
              </Routes>
          </BrowserRouter> 
        </CartContextProvider>
    </div>
    </div>
);
}

export default App;

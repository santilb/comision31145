import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Empresa from './components/Empresa/Empresa'
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import { NotificationProvider } from './notification/Notification';
import Form from './components/Form/Form';


const App = () => {

  return (
    <div className="App">
      <div className='container'>
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path ='/' element={<ItemListContainer greeting="Bienvenido"/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path ={`/detail/:productId`} element={<ItemDetailContainer/>} />
                <Route path ={`/cart`} element={<Cart/>} />
                <Route path ={`/empresa`} element={<Empresa/>} />
                <Route path="/order" element={<Form/>}/>
                <Route path ='*' element={<h1>NOT FOUND 404</h1>}/>  
              </Routes>
          </BrowserRouter> 
        </CartContextProvider>
        </NotificationProvider>
    </div>
    </div>
);
}

export default App;

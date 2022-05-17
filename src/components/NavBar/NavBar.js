import './NavBar.css';
import CartContext from "../../Context/CartContext"
import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, orderBy, query } from 'firebase/firestore'

const NavBar = () => {

  const [categories, setCategories] = useState([])
  const { getQuantity } = useContext(CartContext)

  useEffect(() => {

      getDocs(query(collection(firestoreDb,'categories'))).then(response => {
        const categories = response.docs.map(doc => {
          return { id: doc.id, ...doc.data()}
        })
        setCategories(categories)
      })
  }, [])

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
      <img src={"../../images/logo.png"} width="30" height="30" className="d-inline-block align-top"/>PC MARKET</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>  
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link" href="#">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/empresa" className="nav-link" href="#">La Empresa</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
          Productos </NavLink>
        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink ">
        <a className="dropdown-item" href="/">Todos</a>
        { categories.map(cat => <NavLink className="dropdown-item" key={cat.id} to={`/category/${cat.id}`}
          >{cat.description}</NavLink>)}
        </div>
      </li>
    </ul>
    <div className="cart-widget">
    { 
       getQuantity()==0 ?  <></> : <CartWidget />
    } 
     
    </div>
    </div>
</nav>
    )
}

export default NavBar;
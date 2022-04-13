import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import { getCategories } from '../asynmock'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
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
        <NavLink to="/" className="nav-link" href="#">La Empresa</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
          Productos </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="/">Todos</a>
        { categories.map(cat => <NavLink className="dropdown-item" key={cat.id} to={`/category/${cat.id}`}
          >{cat.description}</NavLink>)}
        </div>
      </li>
    </ul>
    <div className="cart-widget">
    <CartWidget /> 
    </div>
    </div>
</nav>
    )
}

export default NavBar;
import './NavBar.css';
import logo from './logo.png';

const NavBar = () => {
    return(
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href={'https://google.com.ar'}>
  <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
    PC STORE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">La Empresa</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
          Productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Procesadores</a>
          <a className="dropdown-item" href="#">Motherboards</a>
          <a className="dropdown-item" href="#">Placas de Video</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar;
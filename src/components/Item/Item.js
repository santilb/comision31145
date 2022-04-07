import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, category, description, price, pictureUrl }) => {

    return(
        <section>
            <h3>{title}</h3>
            <picture>
                <img src={pictureUrl} alt={title}/>
            </picture>
            <p className="info">Precio: ${price}</p>
            <Link to={`/detail/${id}`}><button>Ver Detalle</button></Link>
        </section>
    )
}

export default Item
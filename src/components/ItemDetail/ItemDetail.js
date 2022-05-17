import './ItemDetail.css'
import { useContext  } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../Context/CartContext'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({ id, title, category, description, price, pictureUrl, stock}) => {

    const { addItem, isInCart,getQuantityProd} = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleAdd = (count) => {
        const productObj = {
            id, title, price, quantity: count
        }

        addItem(productObj)
        setNotification ('success', `Se agregaron ${count} ${title} correctamente`)
    }

    return (
        
        <div className="container">
            <div className="detalleItem">
            <h4>{title}</h4>
                <div className="row align-items-stretch">
                    <div className="col-md-6">
                        <img src={pictureUrl} alt={title}/>
                    </div>
                    <div className="col-md-6">
                        <p>Categoria: {category}</p>
                        <p>Descripción: {description} </p>
                        <p>Stock: {stock} </p>
                        <p className="precio">Precio: ${price}</p>
                        { isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount stock={stock} onAdd={handleAdd} initial={getQuantityProd(id)} /> } 
                    </div>
                </div>

            
            </div>
        </div>  
        
    ) 
}

export default ItemDetail
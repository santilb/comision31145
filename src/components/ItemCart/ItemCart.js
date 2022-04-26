import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

const ItemCart = ({id, name, price, quantity}) =>{

    const { cart, removeItem} = useContext(CartContext)
    
    return (
        <div>
            {
                cart.map(prod => <li key={prod.id}>{prod.name} cantidad: ${prod.quantity} valor: ${prod.price} subtotal ${prod.quantity*prod.price}<button onClick={() => removeItem(prod.id)}>X</button></li>)
            }
            <button><Link to='/'>Vovler a productos</Link> </button>
        </div>
    )
}

export default ItemCart
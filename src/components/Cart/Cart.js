import { useContext } from "react"
import CartContext from '../../Context/CartContext'
import ItemCart from  '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, removeItem} = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito de compras</h1>
                <button><Link to='/'>Ir a productos</Link> </button>
            </div>

        )
    }

    return (
        <ItemCart/>
    )
}

export default Cart
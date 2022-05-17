import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from 'react-router-dom'
import { createOrder } from "../Cart/Cart"

const ItemCart = ({id, name, price, quantity}) =>{

    const { cart, removeItem, clearCart, getTotal} = useContext(CartContext)
    
    const handleRemove = (id) => {
        removeItem(id)
    }
    
    return (
        <div>
            {
            cart.map(prod => <li key={prod.id}>{prod.name} cantidad: ${prod.quantity} valor: ${prod.price} subtotal ${prod.quantity*prod.price}<button onClick={() => handleRemove(prod.id)}>X</button></li>)
            }
            <h3>Total: ${getTotal()}</h3>
            <button><Link to='/'>Vovler a productos</Link> </button>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button> <Link to='/order' className='generarOrden' > Finalizar compra </Link></button> 
        </div>
    )
}

export default ItemCart
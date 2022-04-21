import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const CartWidget = () => { 
    
    const { getQuantity } = useContext(CartContext)

    return(
        <h5><img src={'../../images/cart.png'} width="30" height="30"/> { getQuantity() }</h5>
        )
}
export default CartWidget
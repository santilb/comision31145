import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => { 
    
    const { getQuantity } = useContext(CartContext)

    return(
        <Link to='/cart'>
            <h5><img src={'../../images/cart.png'} width="30" height="30"/> { getQuantity() }</h5>
        </Link>        
        )
}
export default CartWidget
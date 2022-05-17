import { useState } from 'react'
import './ItemCount.css';


const ItemCount = ({initial=1, stock=0, onAdd}) => {

    const [count, setCount] = useState (initial)
    
    const decrement = () => {
        count >0 ? setCount(count-1) : console.log("No resta en cero")
    }

    const increment = () => {    
        count < stock ? setCount(count+1) : console.log("No hay mas stock")
    }
    
    return (
        <div className='itemCount'>
            <h3>Item 1</h3>
            <div>
            <button onClick={decrement}> - </button>
            {count}
            <button onClick={increment}> + </button>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCount
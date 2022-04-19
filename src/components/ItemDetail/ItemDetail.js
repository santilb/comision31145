import './ItemDetail.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, title, category, description, price, pictureUrl, stock}) => {

    const [quantity, setQuantity] = useState(0) 

    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
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
                        <ItemCount stock={stock} onAdd={handleAdd}/>
                    </div>
                </div>

            
            </div>
        </div>  
        
    ) 
}

export default ItemDetail
import './ItemDetail.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


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

const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        count < stock ? setCount(count+1) : console.log("No hay mas stock")
    }

    const decrement = () => {
        count >0 ? setCount(count-1) : console.log("No resta en cero")
    }

    return (
        <div><div>
            <button onClick={decrement}> - </button>
            {count}
            <button onClick={increment}> + </button>
            </div>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const Select = ({ options = [], onSelect}) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}
        </select>
    )
}

const ItemDetail = ({ id, title, category, description, price, pictureUrl, stock}) => {

    const [typeInput, setTypeInput] = useState(true)
    const [quantity, setQuantity] = useState(0) 
    const navigate = useNavigate()

    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }

    const handleSelect = (value) => {
        navigate(value)
    }

    const Count = typeInput ? ButtonCount : InputCount

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
                        {quantity > 0 ? <Link to='/cart'><button>Ir al carrito</button></Link> : <Count onConfirm={handleAdd} stock={stock}/> }
                    </div>
                </div>

            
            </div>
        </div>  
        
    ) 
}

export default ItemDetail
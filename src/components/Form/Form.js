import './Form.css'
import CartContext from "../../Context/CartContext"
import { useContext, useState } from "react"
import { firestoreDb } from '../../services/firebase/index'
import { collection, addDoc, getDocs, where, query,documentId, writeBatch } from "firebase/firestore"
import { NavLink } from 'react-router-dom'

const Form = () => {

    const { cart, clearCart ,getTotal } = useContext(CartContext)

    const [comprador, setComprador] = useState({nombre: '', telefono: '', email: ''})
    const [orderStatus, setOrderStatus] = useState(null)
    const [orderId, setOrderId] = useState(null)

    const getForm = (e) => {

        const { name, value } = e.target;
        setComprador({...comprador, [name]: value})
        console.log(name, value)
    }

    const orderConfirmed = () => {
        setComprador(comprador);
        clearCart()
        setOrderStatus('confirmado')
    }

    const createOrder = async  () => {

        setOrderStatus('procesando')    
        const order = {
            ItemsOrder: cart.map(p=> {return ({id: p.id, nombre: p.title, precio: p.price, quantity: p.quantity })}),
            form: comprador,
            total: getTotal(),
            date: new Date()
        }
        const collectionRefOrder = collection(firestoreDb, 'orders')
            setOrderId(( await addDoc(collectionRefOrder, order)).id)
            orderConfirmed(orderId)
    
    }
    
    const outStock = () =>{
        const ids = cart.map(p => p.id)
        const batch = writeBatch(firestoreDb);
        const collectionRefStock = collection(firestoreDb, 'products');
    
        getDocs(query(collectionRefStock, where(documentId(), 'in', ids)))
            .then(response =>{
                response.docs.forEach(doc=>{
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(p=> p.id === doc.id)?.quantity
    
                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                        batch.commit()
                    }
                })
            }).catch(err =>{
                console.log(err)
            })
    
    }

    const orderAndStock = () =>{
        createOrder();
        outStock();
    }
    
    if(orderStatus === 'confirmado') {

        return(
            <>
            <div className = 'order'>
                <h1>Gracias por tu compra.</h1>
                <p>Tu numero de orden es: <strong> {orderId} </strong>.</p>
                <h3>Guarde su numero de orden para retirar su producto.</h3>
            <div>
                <button className = 'home'><NavLink to='/' >Volver al Home </NavLink> </button>
            </div>
            </div>
            </>
        )
    }else if(orderStatus === 'procesando'){

        return(
            <div>
                <h1>Estamos procesando tu orden.</h1>
            </div>
        )
    }

    return (
        <div className="form1">
            <h2>Formulario de Compra</h2>
            <form className="form2">
                <label>Nombre:</label>
                    <input type="text"
                            name="nombre"
                            value={comprador.nombre}
                            onChange={getForm}
                            className="input" 
                            placeholder="Nombre" 
                            />
                <label>Telefono:</label>
                    <input type="text"
                            name="telefono"
                            value={comprador.telefono}
                            onChange={getForm}
                            className="input" 
                            placeholder="Telefono" />
                <label>Email: </label>
                    <input type="text"
                            name="email"
                            value={comprador.email}
                            onChange={getForm}
                            className="input" 
                            placeholder="email" />
                            <button onClick={() => orderAndStock()} className="formButon"> Enviar </button>
            </form>
        </div>
    )
}




export default Form 
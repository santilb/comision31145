import './ItemDetail.css';

const ItemDetail = ({ id, title, category, description, price, pictureUrl}) => {

    return (
        
        <div className="container">
            <div className="detalleItem">
            <h4>{title}</h4>
                <div className="row align-items-stretch">
                    <div class="col-md-6">
                        <img src={pictureUrl} alt={title}/>
                    </div>
                    <div className="col-md-6">
                        <p>Categoria: {category}</p>
                        <p>Descripción: {description} </p>
                        <p className="precio">Precio: ${price}</p>
                    </div>

                </div>

            
            </div>
        </div>  
        
    ) 

}

export default ItemDetail
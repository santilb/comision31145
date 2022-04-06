const Item = ({ title, pictureUrl}) => {
    return(
        <section>
            <h3>{title}</h3>
            <picture>
                <img src={pictureUrl} alt={title}/>
            </picture>
            <button>Ver Detalle</button>
        </section>
        
    )
}

export default Item
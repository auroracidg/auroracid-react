import React, {useState} from 'react'

const ItemCount = () => {
    const [conteo, setConteo] = useState(0) 

    const sumar = () => {
        setConteo(conteo + 1)

    }

    const restar = ()=> {
        
        if (conteo === 0){
            console.log('0 Es el minimo disponible')   
        } else{
            setConteo(conteo - 1)
        }

    }

    return(
        <div className='carrito' >
            <div>
                <button className='btn-suma-resta' onClick={sumar}>+</button>
                <button className='btn-suma-resta' onClick={restar}>-</button>
            </div>
            <a className='btn-carrito' >Agregar al carrito</a>
            <p>count: {conteo}</p>
        </div>
    )
}

export default ItemCount;
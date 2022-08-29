import React, {useState} from 'react'

const ItemCount = (props) => {
    const [conteo, setConteo] = useState(0) 

   

    const sumar = () => {
        console.log(props.stock)
        if (conteo < props.stock) {
            setConteo(conteo + 1)
        } else {
            alert('No hay mas stock disponible')
        }
       
    }

    const restar = ()=> {
        console.log(props.inicial)
        
        if (conteo === props.inicial){
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
            <button className='btn-carrito' onClick={props.onAdd}>Agregar al carrito</button>
            <p>count: {conteo}</p>
        </div>
    )
}

export default ItemCount;
import React, {useState} from 'react'


const ItemCount = ({stock, inicial, onAdd}) => {
    const [conteo, setConteo] = useState(0) 

   

    const sumar = () => {
        console.log(stock)
        if (conteo < stock) {
            setConteo(conteo + 1)
        } else {
            alert('No hay mas stock disponible')
        }
       
    }

    const restar = ()=> {
        console.log(inicial)
        
        if (conteo === inicial){
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
            <button className='btn-carrito' onClick={ ()=>onAdd(conteo)}>Agregar al carrito</button>
            <p>count: {conteo}</p>
        </div>
    )
}

export default ItemCount;
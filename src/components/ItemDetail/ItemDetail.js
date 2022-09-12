import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = (props) =>{
    const [cantidad, setCantidad] = useState(0)

    const onAdd = (c) => {
        setCantidad(c)
    }

    return(
        <>
            <img src= {props.item.img}/>
            <h1>{props.item.price}</h1> 
            <h1>{props.item.descripcion}</h1>
            {cantidad == props.item.stock ? 
                (<Link to="/cart">Ir al carrito</Link>) 
                : 
                (<ItemCount stock={props.item.stock} inicial={0} onAdd={onAdd}/>) 
            }
            
        </>  
    )
}


export default ItemDetail
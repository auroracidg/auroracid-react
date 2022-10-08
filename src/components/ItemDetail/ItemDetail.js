import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

import { CartContext } from '../../context/CartContext';

const ItemDetail = (props) =>{
    const [cantidad, setCantidad] = useState(0)
    const {addToCart} = useContext(CartContext)

    const onAdd = (c) => {
        setCantidad(c)
        addToCart(props.item, c)
    }

    return(
        <div className='row'>
            <div className='col-6'>
                <img src= {props.item.img}/>
            </div>
            <div className='col-6'>
                <h2>{props.item.titulo}</h2>
                <p>{props.item.descripcion}</p>
                <h2>{props.item.category}</h2>
                <p> stock: {props.item.stock}</p>
                <p>$ {props.item.price}</p>
                {cantidad == props.item.stock ? 
                    (<Link to="/cart">Ir al carrito</Link>) 
                    : 
                    (<ItemCount stock={props.item.stock} inicial={0} onAdd={onAdd}/>) 
                }
            </div> 
        </div>  
    )
}


export default ItemDetail
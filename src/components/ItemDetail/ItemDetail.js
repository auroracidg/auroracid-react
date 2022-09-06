import React from 'react';

const ItemDetail = (props) =>{
    return(
        <>

            <img src= {props.item.img}/>
            <h1>{props.item.price}</h1>
            <h1>{props.item.descripcion}</h1>
            
            

        </>

        
        
        
        
    )
}


export default ItemDetail
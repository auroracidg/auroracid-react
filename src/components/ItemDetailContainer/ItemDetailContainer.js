import product from '../mock/product';
import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'; 

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    const idItem = useParams().id;

    useEffect(()=> {
        const promesa_product = new Promise((resolve, reject) => { 
            const p = product.find(product => product.id === parseInt(idItem))

            setTimeout(() =>{
                resolve(p);
            }, 500);      
        })

        promesa_product
        .then((resultado) => {
            setItem(resultado)
        })
    }, [])
    
    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}


export default ItemDetailContainer
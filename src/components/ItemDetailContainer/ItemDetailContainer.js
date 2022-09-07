import product from '../mock/product';
import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'; 

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})


    console.log(useParams());

    const idItem = useParams().id;

    useEffect(()=> {
        const promesa_product = new Promise((resolve, reject) => { 
            const p = product.find(product => product.id === parseInt(idItem))

            setTimeout(() =>{
                resolve(p);
            }, 1500);      
        })

        promesa_product
        .then((resultado) => {
            console.log('pro')
            console.log(resultado)
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
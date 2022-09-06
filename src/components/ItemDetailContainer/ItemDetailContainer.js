import product from '../mock/product';
import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    useEffect(()=> {
        const promesa_product = new Promise((resolve, reject) => { 
            const p = product.find(product => product.id === 2)

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
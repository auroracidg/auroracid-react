import product from '../mock/product';
import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = (props) =>{
 
    const [listaProductos, setLista] = useState([])

    useEffect(()=> { 

        const mock = new Promise((resolve, reject) => { 
            setTimeout(() =>{
                resolve(product);
            }, 3000);      
        })

        mock
        .then((resultado) => {
            setLista(resultado) 
        })
    }, [])

    return(
        <>
            <h1 className="saludo">SAlUDOS {props.prueba}</h1>
            <ItemList listaProductos={listaProductos}/>
        </>
    )
}



export default ItemListContainer
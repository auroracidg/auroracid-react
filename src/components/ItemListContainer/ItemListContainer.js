import product from '../mock/product';
import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = (props) =>{
      
    const categoryId = useParams().categoryName

    const [listaProductos, setLista] = useState([])

    useEffect(()=> { 

        const mock = new Promise((resolve, reject) => { 

            setTimeout(() =>{
                const productFiltrado = product.filter((p) => p.category === categoryId)
                if (categoryId)
                    resolve(productFiltrado);
                else{
                    resolve(product);
                }
            }, 3000);      
        })

        mock
        .then((resultado) => {
            setLista(resultado) 
        })
    }, [categoryId])

    return(
        <>
            <h1 className="saludo">SAlUDOS {props.prueba}</h1>
            <ItemList listaProductos={listaProductos}/>
        </>
    )
}



export default ItemListContainer
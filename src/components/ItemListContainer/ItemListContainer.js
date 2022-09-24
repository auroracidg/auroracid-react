import product from '../mock/product';
import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const ItemListContainer = (props) =>{
      
    const categoryId = useParams().categoryName
    const [listaProductos, setLista] = useState([])

    useEffect(()=> { 
        const productsCollection = collection(db, 'productos')
        const referencia = categoryId ? query(productsCollection, where("category", "==", categoryId)) : productsCollection
        
        getDocs(referencia)
        .then((res)=>{
            const products = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data()
                }
            })
            setLista(products)
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
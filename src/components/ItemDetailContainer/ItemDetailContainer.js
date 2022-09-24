import product from '../mock/product';
import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    const idItem = useParams().id;

    useEffect(()=> {
        const productCollection = collection(db, 'productos')
        const ref = doc(productCollection, idItem)
        getDoc(ref).then((res) => {
            setItem({
                id: res.id,
                ...res.data()
            })
        })
    }, [])
    
    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}


export default ItemDetailContainer
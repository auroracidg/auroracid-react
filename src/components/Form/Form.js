import React, { useEffect, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { useState } from "react";
import { db } from '../../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const Form = ({handlerId}) =>{

  const  [nombre, setNombre] = useState ('')
  const  [phone, setPhone] = useState ('')
  const  [email, setEmail] = useState ('')
  const {cart, totalPrice, clearCart} = useContext(CartContext)

    const handledSubmit = (event) => { 
        event.preventDefault();
        const order = {
            buyer: {nombre: nombre, phone: phone, email: email},
            items: cart,
            date: serverTimestamp(),
            total: totalPrice(),
        }

        const orderCollection = collection(db, 'orders')
        addDoc(collection(db, 'orders'), order).then((res) => {
            handlerId(res.id)
            clearCart()
        })
    }

        const handleChangeNombre = (event) =>{
            setNombre(event.target.value)

        }
        const handleChangePhone = (event) =>{
            setPhone(event.target.value)

        }

        const handleChangeEmail = (event) =>{
            setEmail(event.target.value)

        }

        useEffect(() =>{
            const edad = document.getElementById('edad')
                
        })

        

    return (


        <div className="form">
        <form action="" onSubmit={handledSubmit}>
            <input 
            type= "text" 
            placeholder="nombre..." 
            name="nombre" 
            value={nombre} 
            onChange={handleChangeNombre}/>

            <input type= "text"
             placeholder="phone..." 
            name="phone"
            value={phone} 
            onChange={handleChangePhone}/>

            <input type= "text"
             placeholder="email..." 
            name="email"
            value={email} 
            onChange={handleChangeEmail}/>

            <button type='submit'>Enviar</button>

        </form>


    </div>
    )

   
}


export default Form
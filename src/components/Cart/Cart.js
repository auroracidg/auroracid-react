import React from "react";
import Form from "../Form/Form"
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom"
import { useState } from "react";

const Cart = () =>{
    const { cart, clearCart, deleteOne, totalPrice, totalPriceSingleProduct } = useContext(CartContext)
    const [idCompra, setIdCompra] = useState('')

    const handlerId = (id) => {
        setIdCompra(id)
    }
    if(idCompra){
        return <h1>Gracias por comprar, el id de tu compra es "{idCompra}"</h1>
    }

    return(
        <div className="container">
            { cart.length === 0 ? (
                <>
                    <h2>El carrito esta vacio</h2>
                    <Link to={'/'}>Ir al Home</Link>
                </>
            ) : (
                <>
                    <Form handlerId={handlerId}/>
                    <button className='btn-carrito btn btn-primary mt-5' onClick={ clearCart }>Limpiar carrito</button>

                    {cart.map((prod) => (
                        <div key={prod.id} className='d-flex alert alert-secondary mt-2 justify-content-between'>
                            <p>{prod.titulo}</p>
                            <p>x{prod.cantidad}</p>
                            <p>Precio c/u: {prod.price}</p>
                            <p>Precio total: {totalPriceSingleProduct(prod.id)}</p>
                            <button className='btn-carrito btn btn-danger' onClick={ () => deleteOne(prod.id) }>Eliminar</button>
                        </div> 
                    ))}
                    <h4>Total a pagar: <strong>${totalPrice()}</strong></h4>
                </>
            )}
            
            
        </div>
    )

   
}



export default Cart
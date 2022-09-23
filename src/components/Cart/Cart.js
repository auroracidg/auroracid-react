import React from "react";
import Form from "../Form/Form"
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom"

const Cart = () =>{
    const { cart, clearCart, deleteOne, totalPrice, totalPriceSingleProduct } = useContext(CartContext)

    return(
        <div className="container">
            { cart.length === 0 ? (
                <>
                    <h2>El carrito esta vacio</h2>
                    <Link to={'/'}>Ir al Home</Link>
                </>
            ) : (
                <>
                    <Form/>
                    <button className='btn-carrito' onClick={ clearCart }>Limpiar carrito</button>

                    {cart.map((prod) => (
                        <div key={prod.id} className='d-flex alert alert-secondary mt-2 justify-content-between'>
                            <p>{prod.titulo}</p>
                            <p>x{prod.cantidad}</p>
                            <p>Precio c/u: {prod.price}</p>
                            <p>Precio total: {totalPriceSingleProduct(prod.id)}</p>
                            <button className='btn-carrito' onClick={ () => deleteOne(prod.id) }>Eliminar</button>
                        </div> 
                    ))}
                    <p>Total a pagar: {totalPrice()}</p>
                </>
            )}
            
            
        </div>
    )

   
}



export default Cart
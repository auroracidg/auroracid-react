import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) =>{

  const addToCart = (item,cantidad) => {
    setCart()
    console.log({...item, cantidad})
    setCart([...cart, {...item, cantidad}])
  }

  const [cart, setCart] = useState([])
  return(
    <CartContext.Provider value={{cart, addToCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

 
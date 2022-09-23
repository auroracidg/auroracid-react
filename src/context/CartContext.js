import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) =>{
  const [cart, setCart] = useState([])

  const addToCart = (item,cantidad) => {
    if(isInCart(item.id)){
      totalQuantitySingleProduct(item, cantidad)
    }else{
      setCart([...cart, {...item, cantidad}])
    }
  }

  const totalQuantitySingleProduct = (item, cantidad) => {
    const updateProducts = cart.map((prod) => {
      if(prod.id === item.id){
        const productUpdated = {
          ...prod,
          cantidad: prod.cantidad + cantidad
        }

        return productUpdated
      }else{
        return prod
      }
    })

    setCart(updateProducts)
  }

  const clearCart = () => {
    setCart([])
  }

  const deleteOne = (id) => {
    const filteredProducts = cart.filter((prod) => prod.id !== id)
    setCart(filteredProducts)
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const totalQuantity = () => {
    let acum = 0
    cart.forEach(prod => {
      acum += prod.cantidad
    });

    return acum
  }

  const totalPrice = () => {
    let acum = 0
    cart.forEach(prod => {
      acum += prod.price * prod.cantidad
    });

    return acum
  }

  const totalPriceSingleProduct = (id) => {
    let price = 0
    const prod = cart.find((prod) => prod.id === id);
    price += prod.price * prod.cantidad
    return price
  }

  return(
    <CartContext.Provider value={{cart, addToCart, clearCart, deleteOne, totalPrice, totalPriceSingleProduct, totalQuantity}}>
      {props.children}
    </CartContext.Provider>
  )
}

 
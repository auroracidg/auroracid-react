import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
   const { totalQuantity } = useContext(CartContext)
   return(
      <>
         <Link to='/cart' className="d-flex">
            <span className="material-symbols-outlined">shopping_cart_checkout</span>
            {totalQuantity() === 0 ? (<p></p>) : (<p>{totalQuantity()}</p>)}
            
         </Link>
      </>
    
    

    
    
 )



}


export default CartWidget
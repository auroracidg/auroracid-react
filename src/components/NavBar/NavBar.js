
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"




const NavBar = () =>{

    
 return(
    <>
    
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <Link to='/' className="navbar-brand">
                
                <img src="https://e7.pngegg.com/pngimages/652/729/png-clipart-clinica-veterinaria-las-lagunas-veterinarian-veterinary-medicine-logo-invent-blue-city.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                Dolce Vita
                
            </Link>
            
        </div>
    </nav>
    <nav>
        
                <ul className="navbar">
                    
                    <Link to="/category/ropa">Accesorios</Link>   

                    <Link to="/category/comida">Alimento</Link>  

                    <Link to="/category/productos">Productos de Limpieza</Link>  
                    
                    <CartWidget/>    
                </ul>

                
            </nav>
    </>
 )

}

export default NavBar
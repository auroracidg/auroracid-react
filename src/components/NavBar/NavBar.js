
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () =>{
 return(
    <nav>
        <h1 className="titulo">Bienvenidos a Dolce Vita</h1>

        

            <Link to='/'>
                <img   alt="hola" src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/hogartotal/M/Mascotas-en-casa-cual-elegir-segun-el-espacio-1.jpg" width="150" height="150"/>
            </Link>

                <ul className="navbar">
                    
                    <Link to="/category/ropa">Accesorios</Link>   

                    <Link to="/category/comida">Alimento</Link>  

                    <Link to="/category/productos">Productos de Limpieza</Link>  
                    
                    <CartWidget/>    
                </ul>

                
            </nav>
 )

}

export default NavBar
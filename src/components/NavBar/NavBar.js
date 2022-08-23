import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
 return(
    <nav>
        <h1 className="titulo">Bienvenios a Dolce Vita</h1>
                <ul className="navbar">
                    <li>
                         <a href="INICIO">INICIO</a>
                    </li>
                    <li>
                         <a href="CONTACTO">CONTACTO</a>
                    </li>
                    <li>
                        <a href="QUIENES SOMOS">QUIENES SOMOS</a>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
 )

}

export default NavBar
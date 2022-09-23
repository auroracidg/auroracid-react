import { Link } from "react-router-dom"

const Item = (props) =>{
    return(
        <>
            <h1 key={props.prd.id}> {props.prd.id}</h1>
            <h2>{props.prd.category}</h2>
            <h2>{props.prd.titulo}</h2>
            <h2>{props.prd.descripcion}</h2>
            <p> stock: {props.prd.stock}</p>

            <img src={props.prd.img} /> 
            <p>$ {props.prd.price}</p>
            <Link to={`/item/${props.prd.id}`}>Ver mas</Link>

        </>
    )
}



export default Item
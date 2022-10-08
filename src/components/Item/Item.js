import { Link } from "react-router-dom"

const Item = (props) =>{
    return(
        <div class="col-lg-4" key={props.prd.id}>
            <img src={props.prd.img} className='bd-placeholder-img rounded-circle' width="300" height="300"/> 
            <h2>{props.prd.titulo}</h2>
            <p>{props.prd.descripcion}</p>
            <h2>{props.prd.category}</h2>
            <p> stock: {props.prd.stock}</p>
            <p>$ {props.prd.price}</p>
            <Link to={`/item/${props.prd.id}`} className='btn btn-secondary'>Ver mas &raquo;</Link>
        </div>
    )
}



export default Item
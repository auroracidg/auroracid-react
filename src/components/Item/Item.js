const Item = (props) =>{

    return(
        <>
            <h1 key={props.prd.id}> {props.prd.id}  {props.prd.category}</h1>
            <h2>{props.prd.titulo}</h2>
            <h2>{props.prd.descripcion}</h2>
            <p> stock: {props.prd.stock}</p>

            <img src={props.prd.img} /> 
            <p>$ {props.prd.price}</p>
        </>
    )
}



export default Item
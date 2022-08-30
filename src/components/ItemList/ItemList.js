import Item from "../Item/Item"

const ItemList = (props) =>{
    return(
        <>
            {props.listaProductos.map( prd => {
                return(
                    <>
                        <Item prd={prd}/>
                    </>
                    
                )
            })}
        </>
    )
}



export default ItemList
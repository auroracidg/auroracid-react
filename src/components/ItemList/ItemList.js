import Item from "../Item/Item"

const ItemList = (props) =>{
    return(
        <>
            {props.listaProductos.map( prd => {
                return(
                    <>
                        <Item key={prd.id} prd={prd}/>
                    </>
                    
                )
            })}
        </>
    )
}



export default ItemList
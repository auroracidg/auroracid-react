import Item from "../Item/Item"

const ItemList = (props) =>{
    return(
        <div class="row">
            {props.listaProductos.map( prd => {
                return(
                    <>
                        <Item key={prd.id} prd={prd}/>
                    </>
                    
                )
            })}
        </div>
    )
}



export default ItemList
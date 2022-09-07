import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Main = ({test, fecha, saludar, saludo}) => {


    return(
        <main className="contenedor-main">
          <section>
              <h2 onClick={saludar}>Bienvenidos {test} </h2>
              <p> hoy es {fecha} de agosto</p>
              <p>{saludo}</p>
          </section>
        </main>
    );
};

export default Main;
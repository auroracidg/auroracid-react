import Navbar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'




const App = () => {

  const saludo = 'bienvenidos'

  const saludar = () =>{

    console.log('holi')



  }

  
  
  return(
    <>
      <Navbar/>
      <ItemListContainer prueba= 'Coordiales de DOLCE VITA' />

      <Header/>
      <Main test="A la tienda de perritos mas cool" fecha= {22} saludo= "saludo" saludar={saludar} />
      <ItemCount/>
      

    </>
    
    
  )


  
};


export default App;

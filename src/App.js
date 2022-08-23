import Navbar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




const App = () => {
  return(
    <>
      <Navbar/>
      <ItemListContainer prueba= 'Coordiales de DOLCE VITA' />

      <Header/>
      <Main test="A la tienda de perritos mas cool" fecha= {22}/>
      

    </>
    
    
  )


  
};


export default App;

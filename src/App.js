import Navbar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = () => {

  const saludo = 'bienvenidos'

  const saludar = () =>{

    console.log('holi')



  }

  const onAdd = () => {
    console.log('agregando')
  }

  
  
  return(
    <BrowserRouter>
      
      <Navbar/>
      <Routes>
            <Route 
              path='/' 
              element={<ItemListContainer prueba= 'Coordiales de DOLCE VITA' />}/>

            <Route 
              path='/category/:categoryName' 
              element={<ItemListContainer prueba= 'Coordiales de DOLCE VITA' />}/>
            <Route
            path='/main'
            element={<Main test="A la tienda de perritos mas cool" fecha= {22} saludo= "saludo" saludar={saludar} />}/>

            <Route
            path='/header'
            element={<Header/>}/>

            <Route
            path='/count'
            element={<ItemCount stock={15} inicial={0} onAdd={onAdd}/>}/>

            <Route
            path='/item/:id'
            element={<ItemDetailContainer/>}/>
            
           
      </Routes>
    </BrowserRouter>
    
    
  )


  
};


export default App;


//<Navbar/>
            
//<Header/>
//<Main test="A la tienda de perritos mas cool" fecha= {22} saludo= "saludo" saludar={saludar} />
//<ItemCount stock={15} inicial={0} onAdd={onAdd}/>
//<ItemDetailContainer/>
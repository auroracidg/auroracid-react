import Navbar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { createContext } from 'react';
import {CartProvider} from './context/CartContext'



export const PruebaContext = createContext();



const App = () => {
    const saludar = () =>{
    }

    const onAdd = () => {
      
    }

  return(
    <CartProvider>
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

              <Route
              path='/cart'
              element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )


  
};


export default App;


//<Navbar/>
            
//<Header/>
//<Main test="A la tienda de perritos mas cool" fecha= {22} saludo= "saludo" saludar={saludar} />
//<ItemCount stock={15} inicial={0} onAdd={onAdd}/>
//<ItemDetailContainer/>
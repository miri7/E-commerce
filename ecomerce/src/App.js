import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Home from './components/Home/Index'
import Productos from './components/Productos'
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/producto/:id' element={<Productos></Productos>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    </CartProvider>
  );
}

export default App;

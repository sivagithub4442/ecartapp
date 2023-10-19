import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  return (
    < >
     <Header/>

     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;

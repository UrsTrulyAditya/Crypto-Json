import Header from './components/header';
import Home from './components/home';
import View from './components/view';
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import HeroCard from './components/heroCard';

import './App.css';   
import CryptoDetailPage from './components/crptoDetailsPage';
function App() {
  return (
    <BrowserRouter>
    
    {/* <Header /> */}
     
    

    <Routes>
     < Route path='/' element={<Home/>}/>
     < Route path='/view' element={<View/>}/>
     <Route path='/crypto/:id' element={<CryptoDetailPage/>} />
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
import Header from './components/header';
import Home from './components/home';
import View from './components/view';
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import HeroCard from './components/heroCard';
import './App.css';   
function App() {
  return (
    <BrowserRouter>
    
    <Header />
     
    <HeroCard/>

    <Routes>
     < Route path='/' element={<Home/>}/>
     < Route path='/view' element={<View/>}/>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
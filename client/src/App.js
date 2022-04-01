import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import { useLocation } from 'react-router-dom';
import './App.css';
//import Header from './components/Header';
import Submitpage from './components/Submitpage';
//import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  //const location= useLocation();
  return (
    <Router>    
      <Routes>
        <Route path='/' element={<Home/>}/>
     <Route path='/Submitpage' element={<Submitpage />}/>
     </Routes>
    </Router>  
  );
}

export default App;

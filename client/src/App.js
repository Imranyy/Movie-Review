import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Submitpage from './components/Submitpage';
function App() {
  return (
    <Router>    
      <Routes>
        <Route path='/' exact element={<Home/>}/>
     <Route path='/submitpage' element={<Submitpage />}/>
     </Routes>
    </Router>  
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Submitpage from './components/Submitpage';
import Items from './components/Items';
import Comment from './components/Comment';
import Movies from './components/Movie';
import Animation from './components/Animation';
import Animeform from './components/forms/Animeform';
import Movieform from './components/forms/Movieform'

function App() {
  return (
    <Router>    
      <Routes>
        <Route path='/' exact element={<Home/>}/>
     <Route path='/submitpage' element={<Submitpage />}/>
     <Route path='/serielist' element={<Items/>}/>
     <Route path='/comment' element={<Comment/>}/>
     <Route path='/movielist' element={<Movies/>}/>
     <Route path='/animationlist' element={<Animation/>}/>
     <Route path='movieform' element={<Movieform/>}/>
     <Route path='animeform' element={<Animeform/>}/>
     <Route path='*' element={<Notfound/>}/>
     </Routes>
    </Router>  
  );
}

export default App;

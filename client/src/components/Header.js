import {info,comments} from './Home'
import './Materializecss';
const Header= ()=>{
    
    return(
      <nav class="orange lighten-1" role="navigation">
    <div class="nav-wrapper container"><h5 id="logo-container" class="brand-logo hide-on-med-and-down teal-gray">Movie Site</h5>
      <ul class="right hide-on-med-and-down">
        <li><button onClick={info}>info</button></li>
        <li><button onClick={comments}>Comment</button></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><button  onClick={info}>info</button></li>
        <li><button  onClick={comments}>Comment</button></li>
      </ul>
      <i className='material-icons right hide-on-med-and-up' style={{fontSize:'50px'}}>theater_comedy</i>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav> 
    );
} 

export default Header;

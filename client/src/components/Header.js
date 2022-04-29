import {info,comments} from './Home'

const Header= ()=>{
    
    return(
      <nav class="orange lighten-1" role="navigation">
    <div class="nav-wrapper container"><h5 id="logo-container" class="brand-logo hide-on-med-and-down teal-gray">Movie Site</h5>
      <ul class="right hide-on-med-and-down">
        <li><a class="grey-text" href="#!" onClick={info}>Info <i class="material-icons right" style={{color:'black'}}>info</i></a></li>
        <li><a class="grey-text" href="#!" onClick={comments}>Comment <i class="material-icons right black-text" >tiktok</i></a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav amber lighten-5">
        <li><a class="grey-text" href="#!" onClick={info}>Info <i class="material-icons right" style={{color:'black'}}>info</i></a></li>
        <li><a class="grey-text" href="#!" onClick={comments}>Comment <i class="material-icons right" style={{color:'black'}}>tiktok</i></a></li>
      </ul>
      <i className='material-icons right hide-on-med-and-up' style={{fontSize:'50px'}}>theater_comedy</i>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav> 
    );
} 

export default Header;

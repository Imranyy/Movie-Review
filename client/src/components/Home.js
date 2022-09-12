  import Header from "./Header"
  import { Link } from "react-router-dom";
  import Footerhome from "./Footerhome";
  
  
  const Home=()=>{
    
    
      return(
        <div style={{zIndex:'0'}}>
        <Header/>
              <div className="container">
            
              <Link to={`/movielist`}>
                <div className="card" style={{borderRadius:'8px'}}>
                <div className="card-image carousel carousel-slider center">
               <img class="carousel-item" href="#three!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/spider-man-3-avengers-endgame.webp?alt=media&token=a6a25fb5-4c14-48a6-a32f-9ec4b21ccfaa" alt="Cartoon pic"/>         
              </div>
              <div className="card-content">
                <span className="card-title cyran-text text-darken-4" >Movies</span>
                </div>
            </div>
            </Link>
            
            <Link to={`/serielist`} >
              <div className="card" style={{borderRadius:'8px'}}>
              <div className="card-image carousel carousel-slider">
                <img class="carousel-item" href="#one!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/money_heist_season_5_nairobi_main.jpg?alt=media&token=9673b997-3e6e-45b8-b877-0beb6c2eecab"  alt="Cartoon pic"/>
              </div>
              <div className="card-content">
                <span className="card-title cyran-text text-darken-4"> TV shows /Series</span>
                </div>
            </div>
            </Link>
            
            <Link to={`/animationlist`} >
              <div className="card" style={{borderRadius:'8px'}}>
              <div className="card-image carousel carousel-slider center">
               <img class="carousel-item" href="#two!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Luca_poster.webp?alt=media&token=36be1d45-3894-46b9-aa9a-7c1e4641c0e0" alt="Cartoon pic"/>
                <img class="carousel-item" href="#three!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/moana_review_0.webp?alt=media&token=ac8e9ea8-7ba2-42f8-ad6d-d26b733b471d" alt="Cartoon pic"/>         
              </div>
              <div className="card-content">
                <span className="card-title activator cyran-text text-darken-4">Animations</span>
                   </div>
            </div>
            </Link>
          </div>
          
            <Footerhome/>
          </div>
      );
  }
  export default Home;
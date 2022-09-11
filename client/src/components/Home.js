  import Header from "./Header"
  import { Link } from "react-router-dom";
  import Footerhome from "./Footerhome";
  
  
  const Home=()=>{
    
    
      return(
        <div style={{zIndex:'0'}}>
        <Header/>
              <div className="container">
            
              <Link to={`/movielist`} style={{textDecoration:'none'}}>
                <div className="card">
                <div className="card-image carousel carousel-slider center">
                <img class="carousel-item" href="#one!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/dolittle-universal-1080x793-5e1cc7ac93aa5-1.jpg?alt=media&token=6caf4579-f1a5-476e-b552-99a405129371"  alt="Cartoon pic"/>
                <img class="carousel-item" href="#two!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Iron_Man_(2008_film)_poster.jpg?alt=media&token=c51eee9b-29b3-45ea-b455-f7b1fbe0dd97" alt="Cartoon pic"/>
                <img class="carousel-item" href="#three!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/spider-man-3-avengers-endgame.webp?alt=media&token=a6a25fb5-4c14-48a6-a32f-9ec4b21ccfaa" alt="Cartoon pic"/>         
              </div>
              <div className="card-content">
                <span className="card-title grey-text text-darken-4">Movies</span>
                </div>
            </div>
            </Link>
            
            <Link to={`/serielist`} style={{textDecoration:'none'}}>
              <div className="card">
              <div className="card-image carousel carousel-slider">
                <img class="carousel-item" href="#two!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Scorpion-8.jpg?alt=media&token=db321ea7-fdb3-4ad8-8b74-344c648a8f9e" alt="Cartoon pic"/>
                <img class="carousel-item" href="#one!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/money_heist_season_5_nairobi_main.jpg?alt=media&token=9673b997-3e6e-45b8-b877-0beb6c2eecab"  alt="Cartoon pic"/>
                <img class="carousel-item" href="#three!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Suid-Game-Netflix-1200by667.jpg?alt=media&token=e7dd6883-b90c-4848-bf94-d2060af66a0e" alt="Cartoon pic"/>         
              </div>
              <div className="card-content">
                <span className="card-title grey-text text-darken-4"> TV shows /Series</span>
                </div>
            </div>
            </Link>
            
            <Link to={`/animationlist`} style={{textDecoration:'none'}}>
              <div className="card">
              <div className="card-image carousel carousel-slider center">
                <img class="carousel-item" href="#one!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/_114896031_screenshot-1372.png?alt=media&token=ca7ddf12-73fa-4ef9-99d8-02ee348bd11b"  alt="Cartoon pic"/>
                <img class="carousel-item" href="#two!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Luca_poster.webp?alt=media&token=36be1d45-3894-46b9-aa9a-7c1e4641c0e0" alt="Cartoon pic"/>
                <img class="carousel-item" href="#three!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/moana_review_0.webp?alt=media&token=ac8e9ea8-7ba2-42f8-ad6d-d26b733b471d" alt="Cartoon pic"/>         
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Animations</span>
                   </div>
            </div>
            </Link>
          </div>
          
            <Footerhome/>
          </div>
      );
  }
  export default Home;
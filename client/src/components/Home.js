import {useEffect,useState} from "react";
import Header from "./Header"
import { Link } from "react-router-dom";
import Footerhome from "./Footerhome";
const Home=()=>{
    const [user,setUser]=useState("");
  // const [movie_review,setMovie_review]=useState("");
    useEffect(()=>{
        const FetchReviews=async()=>{
            const res=await fetch('http://localhost:5000/posts');
            const data=await res.json();
            setUser(data);
        }
        FetchReviews()
    },[]);



    //closing modal start
    const start=()=>{
      const aboutmeClose=document.querySelector('.aboutme');
       aboutmeClose.classList.add('close');
    }
    //next modal
    const next=()=>{
      const showNext=document.querySelector('.part1');
      const Next=document.querySelector('.part2');
      showNext.classList.add('close');
      Next.classList.add('open');
    }

    return(
        <div style={{textAlign:'center',alignItems:'center',zIndex:'0'}}>
      <Header title1="Reviews"/> <br/>
        <Link to='/submitpage' style={{float:'right',marginRight:'12%', marginTop:'-90px'}}>Add Review</Link>

        <div className="aboutme">
          <div className="modal">
            <div className="part1">
            <h2 style={{marginTop:'-10px'}}>Info:</h2>
            <p style={{fontFamily:'consolas,Arial'}}>
               This is a site for movie and series lovers. In here, you can review your favorites' and recommend it to other, you can also checkout best watched movies and 
               series from this site. This site focuses on builting a community of movie enthusiates people, bring them together while sharing movies and series.
            </p>
            <button className="btn" onClick={next}>Next</button>
            </div>
            <div className="part2">
              <h2>About Me</h2>

              <button className="btn" onClick={start}>Start</button>
            </div>

          </div>
        </div>

        {/*<div className="clickable">
          <div className="modal">
            <> <p>lik</p>
            {user && user.map((review)=>(
            <div className="movie" key={review.id}>
                <h2>Title: {review.movie_name}</h2>
                <h3>Review: {review.movie_review}</h3>
                <p>Author: {review.author}</p>
            </div>
            ))};
            </>
          </div>
            </div>*/}

          <div style={{marginBottom:'15%',margin:'auto'}}>
           {user && user.map((review)=>(
            <div className="movie" key={review.id}>
                <h2>Title: {review.movie_name}</h2>
                <h3>Review: {review.movie_review}</h3>
                <p>Author: {review.author}</p>
           </div>
          ))}
         </div>
        <Footerhome/>
        </div>
    );
}
export default Home;
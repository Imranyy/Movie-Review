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
      const aboutmeClose=document.querySelector('.aboutme.open');
       aboutmeClose.classList.remove('open');
    }
    //next modal
    const next=()=>{
      const showNext=document.querySelector('.part1');
      const Next=document.querySelector('.part2');
      showNext.classList.add('close');
      Next.classList.add('open');
    }
    //open inf
    const info=()=>{
      const aboutmeClose=document.querySelector('.aboutme');
     aboutmeClose.classList.add('open');
    }
    //enter
    const enter=()=>{
      const splash=document.querySelector('.splash');
      splash.classList.add('close');
    }
    
    return(
        <div style={{textAlign:'center',alignItems:'center',zIndex:'0'}}>
      <Header title1="Reviews"/> <br/>
        <Link to='/submitpage' style={{float:'right',marginRight:'12%', marginTop:'-90px'}}><button className="btn" style={{fontSize:'15px'}}>Add Review</button></Link>
        <button className="btn" style={{marginRight:'1%', marginTop:'-90px'}} onClick={info}>info</button>
        <div className="splash" onClick={enter}>
            <i className="material-icons rotate" style={{fontSize:'2000%',margin:'11% auto',borderRadius:'100px',color:'white'}}>group_work</i>
        </div>

        <div className="aboutme" >
          <div className="modal">
            <div className="part1">
            <h2 style={{marginTop:'-10px'}}>Info:</h2>
            <p style={{fontFamily:'consolas,Arial'}}>
               This is a site for movie and series lovers. In here, you can review your favorites' and recommend it to other, you can also checkout best watched movies and 
               series from this site. This site focuses on builting a community of movie enthusiastic people, bring them together while sharing movies and series.
            </p>
            <button className="btn" onClick={next}>Next</button>
            </div>
            <div className="part2">
              <h2 style={{borderBottom:'1px solid gray',width:'30%',margin:'0 auto'}}>About Me</h2>
              <p>I go by the name <em><strong>Ringside</strong></em>, the creator of this site. You can reach me by either the following:</p>
              <div style={{display:'flex',justifyContent:'space-around', marginTop:'-10px'}}>
                <div><h4>Whatsapp:0754423664</h4><br/><a href="https://wa.me/+254754423664" target='_blank' rel="noopener"><i className="material-icons" style={{marginTop:'-100px',color:'green',cursor:'pointer'}}>whatsapp</i></a></div>
                <div><h4>Email: imranmat245@gmail.com</h4><br/><i class="material-icons" style={{marginTop:'-100px', color:'blue'}}>email</i></div>
                <div><h4>instagram: imrany</h4><br/><i className="material-icons" style={{marginTop:'-100px', color:'red'}}>chat</i></div>
              </div>
              <button className="btn" onClick={start} style={{height:'30px', marginBottom:'10px',fontSize:'15px', padding:'0 auto'}}>Start</button>
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

          <div style={{margin:'auto', fontFamily:'consolas,arial',marginBottom:'10%'}}>
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
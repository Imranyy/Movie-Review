import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {db} from "../FirebaseConfig/Fireconfig";
import {collection,getDocs} from 'firebase/firestore'

const Movie=()=>{
    const [user,setUser]=useState([]);
    const userCollectionRef=collection(db,'post')
    useEffect(()=>{
        const FetchReviews=async()=>{
          const data=await getDocs(userCollectionRef);
            setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        FetchReviews();
    },[]);
    //enter
    const enter=()=>{
        const splash=document.querySelector('.splash');
        splash.classList.add('close');
      }
    return(
      <div class="section no-pad-bot" id="index-banner">
      <div className="splash" onClick={enter} style={{height:'150%'}}>
          <div className="container white-text">
             <i className="material-icons rotate large" style={{fontSize:'1500%'}}>theater_comedy</i>
          </div> 
       </div>
    <div class="container"> 
         {/*<Link to='/movieform'><button className="btn-small waves-effect waves-light orange right" style={{fontSize:'15px'}}>Add Review</button></Link>*/}
         <div className="chip orange right white-text" >Add review<div className="material-icons" style={{fontSize:'25px'}}>not_interested</div></div>
         <Link to='/'><button className="btn-small waves-effect waves-light orange ">Home</button></Link>
         
           {user && user.map((review)=>(
                <article className="container" >
                  <div className="card">
                  <h5 className='orange-text text-darken-5'>{review.movie_name}</h5>
                  <div className="card-image">
                  <iframe width="100%" height="315" src={review.movie_trailer}></iframe>
                  </div>   
                  <div className="card-content">
                  <p>Reviewed by: <i style={{color:'green'}}>{review.author}</i></p>
                <div>Review: {review.review}</div></div>
                </div>
                </article>
           ))}
        </div>
        </div>
    );
}
  
export default Movie;
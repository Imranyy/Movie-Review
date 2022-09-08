import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {db} from "../FirebaseConfig/Fireconfig";
import {collection,getDocs} from 'firebase/firestore'

const Movie=()=>{
    const [user,setUser]=useState([]);
    useEffect(()=>{
        const FetchReviews=async()=>{
          const userCollectionRef=collection(db,'post')
          const data=await getDocs(userCollectionRef);
            setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        FetchReviews();
    },[]);
    
    return(
      <div class="section no-pad-bot" id="index-banner">
    <div class="container"> 
         {/*<Link to='/movieform'><button className="btn-small waves-effect waves-light orange right" style={{fontSize:'15px'}}>Add Review</button></Link>*/}
         <Link to='/movieform' className="chip orange right white-text" >Add review</Link>
         <Link to='/'><button className="btn-small waves-effect waves-light orange ">Home</button></Link>
         
           {user && user.map((review)=>(
                <article className="container" >
                  <div className="card">
                  <h5 className='orange-text text-darken-5'>{review.movie_name}</h5>
                  <div className="card-image">
                  <iframe title="2" width="100%" height="315" src={review.movie_trailer}></iframe>
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
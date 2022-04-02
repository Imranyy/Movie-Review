import {useEffect,useState} from "react";
import Header from "./Header"
import { Link } from "react-router-dom";
const Submitpage=()=>{
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
    return(
        <div style={{textAlign:'center',alignItems:'center'}}>
      <Header title1="Reviews"/> <br/>
        <Link to='/' style={{float:'right',marginRight:'12%', marginTop:'-60px'}}>Back</Link>

       {user && user.map((review)=>(
            <div className="movie" key={review.id}>
                <h2>Title: {review.movie_name}</h2>
                <h3>Review: {review.movie_review}</h3>
                <p>Author: {review.author}</p>
           </div>
        ))}
        </div>
    );
}
export default Submitpage;
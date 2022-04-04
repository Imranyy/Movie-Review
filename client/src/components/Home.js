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
    return(
        <div style={{textAlign:'center',alignItems:'center'}}>
      <Header title1="Reviews"/> <br/>
        <Link to='/submitpage' style={{float:'right',marginRight:'12%', marginTop:'-90px'}}>Add Review</Link>
          <div style={{marginBottom:'15%'}}>
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
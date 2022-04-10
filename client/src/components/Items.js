import {useEffect} from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Items=()=>{
    const [user,setUser]=useState("");

    useEffect(()=>{
        const FetchReviews=async()=>{
            const res=await fetch('http://localhost:5001/movies');
            const data=await res.json();
            setUser(data);
        }
        FetchReviews()
    },[]);
    return(
     <div>
          <Link to='/submitpage' style={{float:'right',marginRight:'13%', marginTop:'-50px'}}><button className="btn" style={{fontSize:'15px'}}>Add Review</button></Link>
          <Link to='/' style={{marginTop:'-50px',marginRight:'3%',float:'right'}}><button className='btn'>Home</button></Link>
           {user && user.map((review)=>(
                <article style={{margin:'5% 20%',}} key={review.id}>
                    <h2 style={{borderBottom:'solid 1px grey'}}>{review.movie_name}</h2>
                    <p>Reviewed by: <i style={{color:'green'}}>{review.author}</i></p>
                <div>Review: {review.movie_review}</div>
                </article>
           ))};
        </div>
    );
}
export default Items;
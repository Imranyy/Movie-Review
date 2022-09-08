import {useEffect} from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {db} from "../FirebaseConfig/Fireconfig";
import {collection,getDocs} from 'firebase/firestore'

const Items=()=>{
   
    const [user,setUser]=useState([]);
    const [para,setPara]=useState("");
    useEffect(()=>{
      try{
        const FetchReviews=async()=>{
          const userCollectionRef=collection(db,"series");
            const data=await getDocs(userCollectionRef);
            setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }; 

        FetchReviews();
    
  }catch (error){
      setPara('fetching data...must sure you have a good Internet-Connection')
    }
   },[]);
    
    return(
      <div class="section no-pad-bot" id="index-banner">
     
    <div class="container"> 
         {/*<Link to='/submitpage'><button className="btn-small waves-effect waves-light orange right" style={{fontSize:'15px'}}>Add Review</button></Link>*/}
         <Link to='/submitpage' className="chip orange right white-text" >Add review</Link>
         <Link to='/'><button className="btn-small waves-effect waves-light orange ">Home</button></Link>
         
           {user && user.map((review)=>(
                <article className="container" key={review.id}>
                   <div className="card">
                  <h5 style={{margin:'11% auto'}}>{para}</h5>
                    <h5 className='orange-text text-darken-5'>{review.serie_name}</h5>
                    <div className='card-image'>
                    <iframe title='4' width="100%" height="315" src={review.serie_trailer}></iframe>
                    </div>
                    <div className='card-content'>
                    <p>Reviewed by: <i style={{color:'green'}}>{review.author}</i></p>
                <div>Review: {review.review}</div>
                </div>
                </div>
                </article>
           ))}
        </div>
        </div>
    );
}
export default Items;
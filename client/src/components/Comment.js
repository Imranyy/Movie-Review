import {db} from "../FirebaseConfig/Fireconfig";
import {collection,getDocs} from 'firebase/firestore'
import {useEffect} from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Comment=()=>{
    const [user,setUser]=useState([]);
    const userCollectionRef=collection(db,"comments")
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
          <Link to='/'><button className="btn-small waves-effect waves-light orange ">Home</button></Link>
           <h2 style={{borderBottom:'solid 1px grey', margin:'4% 20% 0 19%'}}>Comments</h2>
          
           {user && user.map((review)=>(
                <article style={{margin:'3% 20%',padding:'0 0 0 15px',height:'150px',borderRadius:'5px',boxShadow: '1px 3px 5px rgba(0,0,0,0.1)'}}>
                    <p>Sent by: <i style={{color:'green'}}>{review.email}</i></p>
                <div>Review: {review.comment}</div>
                </article>
           ))};
           </div>
           </div>
    )
}
export default Comment;
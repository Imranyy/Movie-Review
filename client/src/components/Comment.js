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
     <div>
          <Link to='/' style={{marginTop:'-50px',marginRight:'3%',float:'right'}}><button className='btn'>Home</button></Link>
          <h2 style={{borderBottom:'solid 1px grey', margin:'4% 20% 0 19%'}}>Comments</h2>
          <div className="splash" onClick={enter} style={{height:'150%'}}>
            <i className="material-icons rotate" style={{fontSize:'2000%',margin:'20% 50% 20% 40%',borderRadius:'100px',color:'white'}}>theater_comedy</i>
        </div>
           {user && user.map((review)=>(
                <article style={{margin:'3% 20%',padding:'0 0 0 15px',height:'150px',borderRadius:'5px',boxShadow: '1px 3px 5px rgba(0,0,0,0.1)'}}>
                    <p>Sent by: <i style={{color:'green'}}>{review.email}</i></p>
                <div>Review: {review.comment}</div>
                </article>
           ))};
           </div>
    )
}
export default Comment;
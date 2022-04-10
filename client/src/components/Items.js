import {useEffect} from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {db} from "../FirebaseConfig/Fireconfig";
import {collection,getDocs} from 'firebase/firestore'

const Items=()=>{
    const [user,setUser]=useState([]);
    const userCollectionRef=collection(db,"series")
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
          <Link to='/submitpage' style={{float:'right',marginRight:'13%', marginTop:'-50px'}}><button className="btn" style={{fontSize:'15px'}}>Add Review</button></Link>
          <Link to='/' style={{marginTop:'-50px',marginRight:'3%',float:'right'}}><button className='btn'>Home</button></Link>
          <div className="splash" onClick={enter} style={{height:'150%'}}>
            <i className="material-icons rotate" style={{fontSize:'2000%',margin:'20% 50% 20% 40%',borderRadius:'100px',color:'white'}}>theater_comedy</i>
        </div>
           {user && user.map((review)=>(
                <article style={{margin:'5% 20%',}} key={review.id}>
                    <h2 style={{borderBottom:'solid 1px grey'}}>{review.serie_name}</h2>
                    <p>Reviewed by: <i style={{color:'green'}}>{review.author}</i></p>
                <div>Review: {review.review}</div>
                </article>
           ))};
        </div>
    );
}
export default Items;
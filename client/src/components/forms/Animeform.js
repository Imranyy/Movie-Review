
import Footer from '../Footer';
import { useState } from 'react';
import Footerhome from '../Footerhome';
import { useNavigate } from 'react-router-dom';
import {db} from '../../FirebaseConfig/Fireconfig'
import {collection,addDoc} from 'firebase/firestore'
    
const Animeform=()=>{
    const userCollectionRef=collection(db,"animation");
        const navigate=useNavigate();
        const [animation_name,setNewanimation] =useState('')
        const [review,setReview] =useState('')
        const [author,setAuthor] =useState('')
       
        
        const onSubmit=async e=>{
            e.preventDefault();
            alert('Your Review was Sent');
            navigate('/animationlist')
            await addDoc(userCollectionRef,{animation_name,review,author});
          
        }
        const back=()=>{
            navigate('/animationlist');
        }
        return(
            <div className="section no-pad-bot" id="index-banner">
            <button onClick={back} class="btn-small waves-effect waves-light orange right">Back</button><br/><br/>
           <div className='container'>
              
              <form onSubmit={onSubmit}>
                 <p><h5 className='header'>Animation Name:</h5>
                <input type="text" name='animation_name' placeholder='Animation Name' value={animation_name} onChange={e=>{setNewanimation(e.target.value)}} required/> 
                <h5 className='header'>Author:</h5>
                <input type="text" name='author' placeholder=" Your Name" value={author} onChange={e=>{setAuthor(e.target.value)}} required/> 
                <h5 className='header'>Review: </h5>
                <textarea name='review' placeholder=" write your review" value={review} onChange={e=>{setReview(e.target.value)}} required /> 
               </p>
                <Footer/>
                </form>
                </div> <br/><br/><br/><br/> 
                <Footerhome/>
                </div>
    
    );
}
export default Animeform;
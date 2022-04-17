
import { useState } from 'react';
import Footer from '../Footer';
import Footerhome from '../Footerhome';
import { useNavigate } from 'react-router-dom';
import {db} from '../../FirebaseConfig/Fireconfig';
import {collection,addDoc} from 'firebase/firestore';
const Movieform=()=>{
    const userCollectionRef=collection(db,"post");
        const navigate=useNavigate();
        const [movie_name,setMovie] =useState('')
        const [author,setAuthor] =useState('')
        const [review,setReview] =useState('')
    
       
        
    
        const onSubmit=async e=>{
            e.preventDefault();
            alert('Your Review was Sent');
            navigate('/movielist')
            await addDoc(userCollectionRef,{movie_name,review,author});
           
        }
        const back=()=>{
            navigate('/movielist');
        }
        return(
            <div className="section no-pad-bot" id="index-banner">
            <button onClick={back} class="btn-small waves-effect waves-light orange right">Back</button><br/><br/>
           <div className='container'>
              
              <form onSubmit={onSubmit}>
                 <p><h5 className='header'>Movie Name:</h5>
                <input type="text" name='movie_name' placeholder='Movie Name' value={movie_name} onChange={e=>{setMovie(e.target.value)}} required/> 
                <h5 className='header'>Author:</h5>
                <input type="text" name='author' placeholder=" Your Name" value={author} onChange={e=>{setAuthor(e.target.value)}} required/> 
                <h5 className='header'>Movie Review:</h5>
                <textarea name='review' placeholder=" write your review" value={review} onChange={e=>{setReview(e.target.value)}} required /> 
               </p>
                <Footer/>
                </form>
                </div> <br/><br/><br/><br/>
                <Footerhome/>
                </div>
    
    );
}
export default Movieform
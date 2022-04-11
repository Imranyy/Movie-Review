
import Header from '../Header';
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
            <div className="App">
            <header className="App-header">
            <button className='btn' onClick={back} style={{float:'right',marginRight:'20px',marginTop:'-25px'}}>Back</button>
             <Header title="Add Review"/>
              <form onSubmit={onSubmit}>
                 <p><label>Animation Name:</label>
                <input type="text" name='animation_name' placeholder='Animation Name' value={animation_name} onChange={e=>{setNewanimation(e.target.value)}} required/> 
                <label>Author:</label>
                <input type="text" name='author' placeholder=" Your Name" value={author} onChange={e=>{setAuthor(e.target.value)}} required/> 
                <label>Review: </label>
                <textarea name='review' placeholder=" was good" value={review} onChange={e=>{setReview(e.target.value)}} required /> 
               </p>
                <Footer/>
                </form>
                </header>  
                <Footerhome/>
                </div>
    
    );
}
export default Animeform;
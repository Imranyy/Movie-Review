
import React,{useState} from 'react';
import Footer from './Footer';
import Footerhome from './Footerhome';
import { useNavigate } from 'react-router-dom';
import {db} from '../FirebaseConfig/Fireconfig'
import {collection,addDoc} from 'firebase/firestore'
const Submitpage=()=>{
    const userCollectionRef=collection(db,"series");
    const navigate=useNavigate();
    const [serie_name,setSerie] =useState('')
    const [author,setAuthor] =useState('')
    const [review,setReview] =useState('')


   
    

    const onSubmit=async(e)=>{
        e.preventDefault();
        alert('Your Review was Sent');
        navigate('/serielist')
        await addDoc(userCollectionRef,{serie_name,author,review});
       
    }
    const back=()=>{
        navigate('/serielist');
    }
   
    return(
        <div className="section no-pad-bot" id="index-banner">
            <button onClick={back} class="btn-small waves-effect waves-light orange right">Back</button><br/><br/>
           <div className='container'>
              
          <form onSubmit={onSubmit}>
             <p><h5 className='header'>Tv show/Series:</h5>
            <input type="text" name='serie_name' placeholder='Tv show /series' value={serie_name} onChange={e=>{setSerie(e.target.value)}} required/> 
            <h5 className='header'>Author:</h5>
            <input type="text" name='author' placeholder=" Your Name" value={author} onChange={e=>setAuthor(e.target.value)} required/> 
            <h5 className='header'>Review:</h5>
            <textarea name='review' placeholder=" write your review" value={review} onChange={e=>setReview(e.target.value)} required /> 
           </p>
            <Footer/>
            </form>
            </div> <br/><br/><br/><br/>  
            <Footerhome/>
            </div>

    );
}
export default Submitpage;
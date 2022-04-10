
import React,{useState} from 'react';
import Header from './Header';
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
        <div className="App">
        <header className="App-header">
        <button className='btn' onClick={back} style={{float:'right',marginRight:'20px',marginTop:'-25px'}}>Back</button>
         <Header title="Add Review"/>
          <form onSubmit={onSubmit}>
             <p><label>Tv show/Series:</label>
            <input type="text" name='serie_name' placeholder='Tv show /series' value={serie_name} onChange={e=>{setSerie(e.target.value)}} required/> 
            <label>Author:</label>
            <input type="text" name='author' placeholder=" Your Name" value={author} onChange={e=>setAuthor(e.target.value)} required/> 
            <label>Review:</label>
            <textarea name='review' placeholder=" was good" value={review} onChange={e=>setReview(e.target.value)} required /> 
           </p>
            <Footer/>
            </form>
            </header>  
            <Footerhome/>
            </div>

    );
}
export default Submitpage;
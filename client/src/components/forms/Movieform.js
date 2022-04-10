
import { useState } from 'react';
import Header from '../Header';
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
            <div className="App">
            <header className="App-header">
            <button className='btn' onClick={back} style={{float:'right',marginRight:'20px',marginTop:'-25px'}}>Back</button>
             <Header title="Add Review"/>
              <form onSubmit={onSubmit}>
                 <p><label>Movie Name:</label>
                <input type="text" name='movie_name' placeholder='Movie Name' value={movie_name} onChange={e=>{setMovie(e.target.value)}} required/> 
                <label>Author:</label>
                <input type="text" name='author' placeholder=" Your Name" value={author} onChange={e=>{setAuthor(e.target.value)}} required/> 
                <label>Movie Review:</label>
                <textarea name='review' placeholder=" was good" value={review} onChange={e=>{setReview(e.target.value)}} required /> 
               </p>
                <Footer/>
                </form>
                </header>  
                <Footerhome/>
                </div>
    
    );
}
export default Movieform
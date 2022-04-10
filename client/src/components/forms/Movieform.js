import axios from 'axios';
import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Footerhome from '../Footerhome';
import { useNavigate } from 'react-router-dom';

const Movieform=()=>{
        const navigate=useNavigate();
        const [user,setUser]=useState({
            movie_name:"",
            movie_review:"",
            author:""
        });
        const {movie_name, movie_review,author}=user;
        const onInputChange=e=>{
            setUser({...user,[e.target.name]:e.target.value})
        };
    
        const onSubmit=async e=>{
            e.preventDefault();
            await axios.post("http://localhost:5001/series",user);
            alert('Request Sent');
        }
        const back=()=>{
            navigate('/movielist');
        }
        return(
            <div className="App">
            <header className="App-header">
            <button className='btn' onClick={back} style={{float:'right',marginRight:'20px',marginTop:'-25px'}}>Back</button>
             <Header title="Add Review"/>
              <form onSubmit={e=>onSubmit(e)}>
                 <p><label>Movie Name:</label>
                <input type="text" name='movie_name' placeholder='Movie Name' value={movie_name} onChange={e=>onInputChange(e)} required/> 
                <label>Author:</label>
                <input type="text" name='author' placeholder=" Your Name" value={author} onChange={e=>onInputChange(e)} required/> 
                <label>Movie Review:</label>
                <textarea name='movie_review' placeholder=" was good" value={movie_review} onChange={e=>onInputChange(e)} required /> 
               </p>
                <Footer/>
                </form>
                </header>  
                <Footerhome/>
                </div>
    
    );
}
export default Movieform
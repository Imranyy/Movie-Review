import axios from 'axios';
import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
const Home=()=>{
    const [user,setUser]=useState({
        movie_name:"",
        movie_review:""
    });
    const {movie_name, movie_review}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/posts",user);
        alert('Request Sent');
    }
    return(
        <div className="App">
        <header className="App-header">
          <Header title="Movies Site"/>
          <form onSubmit={e=>onSubmit(e)}>
             <p><label>Movie Name:</label>
            <input type="text" name='movie_name' placeholder='silicon valley' value={movie_name} onChange={e=>onInputChange(e)}/> 
            <label>Movie Review:</label>
            <input type="text" name='movie_review' placeholder=" was good" value={movie_review} onChange={e=>onInputChange(e)}/> 
            </p>
            <Footer/>
            </form>
            </header>  
            
            </div>

    );
}
export default Home;
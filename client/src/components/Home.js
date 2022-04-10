import Header from "./Header"
import { Link, useNavigate } from "react-router-dom";
import Footerhome from "./Footerhome";
import Button from '@mui/material/Button'
import { useState } from "react";
import { db, auth } from "../FirebaseConfig/Fireconfig";
import { collection,addDoc } from "firebase/firestore";
import {} from 'firebase/auth'

const Home=()=>{
  
    //closing modal start
    const start=()=>{
      const aboutmeClose=document.querySelector('.aboutme.open');
       aboutmeClose.classList.remove('open');
    }
    //next modal
    const next=()=>{
      const showNext=document.querySelector('.part1');
      const Next=document.querySelector('.part2');
      showNext.classList.add('close');
      Next.classList.add('open');
    }
    //open inf
    const info=()=>{
      const aboutmeClose=document.querySelector('.aboutme');
     aboutmeClose.classList.add('open');
    }
    
    //login modal
    const login=()=>{
      const login=document.querySelector('.login')
      login.classList.add('open')
    }
    //closing login
    const closelogin=()=>{
      const close=document.querySelector('.login.open')
      close.classList.remove('open')
    }
    //comment
    const comments=()=>{
       const comment=document.querySelector('.comment')
       comment.classList.add('open')
    }
    //close comment
    const closecomment=()=>{
      const close=document.querySelector('.comment.open')
      close.classList.remove('open')
    }
    const userCollectionRef=collection(db,"comments");
    const [email,setEmail]=useState('');
    const [comment,setComment]=useState('');
    const addcomment=async(e)=>{
      e.preventDefault();
      alert('Your Comment was Sent');
      closecomment();
      await addDoc(userCollectionRef,{email,comment});
    }
    
    const [loginemail,setLoginemail]=useState("");
    const [loginpassword,setLoginpassword]=useState("");
    
    return(
        <div style={{textAlign:'center',alignItems:'center',zIndex:'0'}}>
      <Header title1="Movies Site"/> <br/>
       <button className="btn" style={{marginRight:'10%', marginTop:'-90px'}} onClick={info}>info</button>
        <button className="btn" style={{marginRight:'1%', marginTop:'-90px'}} onClick={comments}>Comment</button>
        
     
        <div className="comment">
          <div className="commentmodal">
            <form  onSubmit={addcomment}>
              <i className="material-icons" style={{marginLeft:'-90%',fontSize:'200%'}}>email</i><input type='text' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email" required style={{height:'30px'}}/>
              <i className="material-icons" style={{marginLeft:'-90%',fontSize:'200%'}}>send</i><textarea name="comment" value={comment} onChange={(e)=>{setComment(e.target.value)}} placeholder="your comment on the website" required style={{height:'70%',width:'100%'}}/>
              <Button type="submit" variant='outlined' style={{margin:'5% auto'}}>Submit</Button>
            </form>
            <Button onClick={closecomment} style={{float:'right',marginTop:'-11%', cursor:'pointer'}}> Close</Button>
          </div>
        </div>

        <div className="login">
          <div className="loginmodal">
          <h2 style={{borderBottom:'1px solid gray',width:'30%',margin:'0 auto',color:'blueviolet'}}>Login</h2>
            <form>
              <i className="material-icons" style={{marginLeft:'-90%',fontSize:'200%'}}>email</i><input type='text' name='loginemail' value={loginemail} placeholder="enter email" required style={{height:'30px'}} onChange={e=>{setLoginemail(e.target.value)}}/>
              <i className="material-icons" style={{marginLeft:'-90%',fontSize:'200%'}}>security</i><input type='password' placeholder="enter password" name='loginpassword' value={loginpassword} required style={{height:'30px'}} onChange={e=>{setLoginpassword(e.target.value)}}/>
              <Button type="submit" variant='outlined' style={{margin:'5% auto'}}>Submit</Button>
            </form>
            <Button color='primary' onClick={closelogin} style={{float:'right',marginTop:'-10%', cursor:'pointer'}}> Close</Button>
          </div>
        </div>

        

        <div className="aboutme" >
          <div className="modal">
            <div className="part1">
            <h2 style={{marginTop:'-10px'}}>Info:</h2>
            <p style={{fontFamily:'consolas,Arial'}}>
               This is a site for movie and series lovers. In here, you can review your favorites' and recommend it to other, you can also checkout best watched movies and 
               series from this site. This site focuses on builting a community of movie enthusiastic people, bring them together while sharing movies and series.
            </p>
            <button className="btn" onClick={next}>Next</button>
            </div>
            <div className="part2">
              <h2 style={{borderBottom:'1px solid gray',width:'30%',margin:'0 auto'}}>About Me</h2>
              <p>I go by the name <em><strong>Ringside</strong></em>, the creator of this site. You can reach me by either the following:</p>
              <div style={{display:'flex',justifyContent:'space-around', marginTop:'-10px'}}>
                <div><h4>Whatsapp:0754423664</h4><br/><a href="https://wa.me/+254754423664"><i className="material-icons" style={{marginTop:'-100px',color:'green',cursor:'pointer'}}>whatsapp</i></a></div>
                <div><h4>Email: imranmat245@gmail.com</h4><br/><i class="material-icons" style={{marginTop:'-100px', color:'blue'}}>email</i></div>
                <div><h4>instagram: imrany</h4><br/><i className="material-icons" style={{marginTop:'-100px', color:'red'}}>chat</i></div>
              </div>
              <button className="btn" onClick={login} style={{height:'30px', marginBottom:'10px',fontSize:'15px', padding:'0 auto',float:'left'}}>Staff Only<i className="material-icons" style={{fontSize:'12px'}}>admin_panel_settings</i></button>
              <button className="btn" onClick={start} style={{height:'30px', marginBottom:'10px',fontSize:'15px', padding:'0 auto'}}>Leave</button>
            </div>

          </div>
        </div>

            <div style={{margin:'auto', fontFamily:'consolas,arial',marginBottom:'10%'}}>
           
             <Link to={`/movielist`} style={{textDecoration:'none'}}>
            <div className="movie">
                <h2 style={{margin:'0 30% 0 10%'}}>: Movies</h2> 
           </div>
           </Link>
           
           <Link to={`/serielist`} style={{textDecoration:'none'}}>
            <div className="movie">
                <h2 style={{margin:'0 30% 0 23%'}}>: Tv shows /Series</h2> 
           </div>
           </Link>
          
           <Link to={`/animationlist`} style={{textDecoration:'none'}}>
            <div className="movie">
                <h2 style={{margin:'0 30% 0 15%'}}>: Animations</h2> 
           </div>
           </Link>
         </div>
        <Footerhome/>
        </div>
    );
}
export default Home;
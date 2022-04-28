  import Header from "./Header"
  import { Link, useNavigate } from "react-router-dom";
  import Footerhome from "./Footerhome";
  import { useState } from "react";
  import { db, auth } from "../FirebaseConfig/Fireconfig";
  import { collection,addDoc } from "firebase/firestore";
  import {signInWithEmailAndPassword} from 'firebase/auth';
 
  
   //comment
   export const comments=()=>{
    const comment=document.querySelector('.comment')
    comment.classList.add('open')
  }
   
   //open inf
   export const info=()=>{
    const aboutmeClose=document.querySelector('.aboutme');
  aboutmeClose.classList.add('open');
  }

  const Home=()=>{
    const navigate=useNavigate();
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
      const [para,setPara]=useState("");
      const Loginuser=async(e)=>{
        e.preventDefault();
          try{
            await signInWithEmailAndPassword(auth,loginemail,loginpassword);
          alert('You are authorized');
          navigate('/comment')
        }catch (error){
          setPara('not authorized');
          navigate('/')
        }
      }
      
      return(
        <div style={{zIndex:'0'}}>
        <Header/><br/><br/><br/><br/>
          <div className="comment">
            <div className="commentmodal">
              <form  onSubmit={addcomment}>
                <i className="material-icons" style={{marginLeft:'-90%',fontSize:'200%'}}>email</i><input type='text' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email" required style={{height:'30px'}}/>
                <i className="material-icons" style={{marginLeft:'-90%',fontSize:'200%'}}>send</i><textarea name="comment" value={comment} onChange={(e)=>{setComment(e.target.value)}} placeholder="your comment on the website" required style={{height:'100%',width:'100%'}}/>
                <button className="btn-small waves-effect waves-light orange" style={{marginTop:'60px'}} >Submit</button>
              </form>
              <button className="btn-small waves-effect waves-light orange" onClick={closecomment} style={{marginTop:'-34px',float:'right'}}> Close</button>
            </div>
          </div>

          <div className="login">
            <div className="loginmodal">
            <h5 style={{borderBottom:'1px solid gray',width:'30%',margin:'0 auto',color:'blueviolet'}}>Login</h5> <br/>
            <p style={{fontSize:'20px'}}>{para}</p>
              <form onSubmit={Loginuser}>
                <i className="material-icons" style={{marginLeft:'-90%',fontSize:'200%'}}>email</i><input type='text' name='loginemail' value={loginemail} placeholder="enter email" required style={{height:'30px'}} onChange={(e)=>{setLoginemail(e.target.value)}}/>
                <i className="material-icons" style={{marginLeft:'-90%',fontSize:'200%'}}>security</i><input type='password' placeholder="enter password" name='loginpassword' value={loginpassword} required style={{height:'30px'}} onChange={(e)=>{setLoginpassword(e.target.value)}}/>
                <button className="btn-small waves-effect waves-light orange left" type="submit" style={{marginTop:'40px'}}>Submit</button>
              </form>
              <button className="btn-small waves-effect waves-light orange right" onClick={closelogin} style={{marginTop:'-35px'}}> Close</button>
            </div>
          </div>

          

          <div className="aboutme" >
            <div className="modal1">
              <div className="part1">
              <h2 style={{marginTop:'-10px'}}>Info:</h2>
              <p style={{fontFamily:'consolas,Arial'}}>
                This is a site for movie and series lovers. In here, you can review your favorites' and recommend it to other, you can also checkout best watched movies and 
                series from this site. This site focuses on builting a community of movie enthusiastic people, bring them together while sharing movies and series.
              </p>
              <button className="btn-small waves-effect waves-light orange" onClick={next}>Next</button>
              </div>
              <div className="part2">
                <h5 style={{borderBottom:'1px solid gray',width:'30%',margin:'0 auto'}}>About Me</h5>
                <p>I go by the name <em><strong>Ringside</strong></em>, the creator of this site. You can reach me by either the following:</p>
                <div className='mdol' style={{display:'flex',justifyContent:'space-around', marginTop:'-10px'}}>
                  <div><h6 className="light">Whatsapp:0754423664</h6><br/><a href="https://wa.me/+254754423664"><i className="material-icons" style={{marginTop:'-100px',color:'green',cursor:'pointer'}}>whatsapp</i></a></div>
                  <div><h6 className="light">Email: imranmat245@gmail.com</h6><br/><i class="material-icons" style={{marginTop:'-100px', color:'blue'}}>email</i></div>
                  <div><h6 className="light">instagram: imrany</h6><br/><i className="material-icons" style={{marginTop:'-100px', color:'red'}}>chat</i></div>
                </div>
                <button className="btn-small waves-effect waves-light orange" onClick={login} style={{height:'30px', marginBottom:'10px',fontSize:'15px', padding:'0 auto',float:'left'}}>Staff Only<i className="material-icons right" >admin_panel_settings</i></button>
                <button className="btn-small waves-effect waves-light orange right" onClick={start} style={{height:'30px', marginBottom:'10px',fontSize:'15px', padding:'0 auto'}}>Leave</button>
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
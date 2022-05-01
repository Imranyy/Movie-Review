  import Header from "./Header"
  import { Link, useNavigate } from "react-router-dom";
  import Footerhome from "./Footerhome";
  import { useState, useEffect} from "react";
  import { db, auth } from "../FirebaseConfig/Fireconfig";
  import { collection,addDoc, getDocs } from "firebase/firestore";
  import {signInWithEmailAndPassword} from 'firebase/auth';
  import Button from '@mui/material/Button';
  
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
    const userCollectionRef1= collection(db,"commentmovie");
    const userCollectionRef2= collection(db,"commentserie");
    const userCollectionRef3=collection(db,"commentanime");

//submit comment
 const onsubmit1=async e=>{
  e.preventDefault();
  alert('comment was sent');
  await addDoc(userCollectionRef1,{comment_movie})
  window.location.reload();
}
const onsubmit2=async e=>{
  e.preventDefault();
  alert('comment was sent');
  await addDoc(userCollectionRef2,{comment_serie});
  window.location.reload();
}
const onsubmit3=async e=>{
  e.preventDefault();
  alert('comment was sent');
  await addDoc(userCollectionRef3,{comment_anime});
  window.location.reload();
}

    const [comment_movie,setComment_movie]=useState(null);
    const [comment_movie1,setComment_movie1]=useState(null);
    const [comment_serie,setComment_serie]=useState(null);
    const [comment_serie1,setComment_serie1]=useState(null);
    const [comment_anime,setComment_anime]=useState(null);
    const [comment_anime1,setComment_anime1]=useState(null);
  
    
    //fetch comments
    useEffect(()=>{
      const FetchReviews=async(e)=>{
        const data=await getDocs(userCollectionRef1);
          setComment_movie1(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      };
      const FetchReviews2=async(e)=>{
        const data=await getDocs(userCollectionRef2);
          setComment_serie1(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      };
      const FetchReviews3=async(e)=>{
        const data=await getDocs(userCollectionRef3);
          setComment_anime1(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      };
      FetchReviews3();
      FetchReviews2();
      FetchReviews();
    },[]);

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
        <Header/><br/><br/><br/>
          <div className="comment">
            <div className="commentmodal amber lighten-5">
              <form  onSubmit={addcomment}>
                <i className="material-icons orange-text text-darken-3" style={{marginLeft:'-90%',fontSize:'200%'}}>email</i><input type='text' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email" required style={{height:'30px'}}/>
                <i className="material-icons orange-text text-darken-3" style={{marginLeft:'-90%',fontSize:'200%'}}>send</i><textarea name="comment" value={comment} onChange={(e)=>{setComment(e.target.value)}} placeholder="your comment on the website" required style={{height:'100%',width:'100%'}}/>
                <button className="btn-small waves-effect waves-light orange" style={{marginTop:'60px'}} >Submit</button>
              </form>
              <button className="btn-small waves-effect waves-light orange" onClick={closecomment} style={{marginTop:'-34px',float:'right'}}> Close</button>
            </div>
          </div>

          <div className="login">
            <div className="loginmodal amber lighten-5">
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
            <div className="modal1 amber lighten-5">
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

              <div className="container">
            
              <div className="card">
              <div className="card-image carousel carousel-slider center">
                <img class="carousel-item" href="#one!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/dolittle-universal-1080x793-5e1cc7ac93aa5-1.jpg?alt=media&token=6caf4579-f1a5-476e-b552-99a405129371"  alt="Cartoon pic"/>
                <img class="carousel-item" href="#two!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Iron_Man_(2008_film)_poster.jpg?alt=media&token=c51eee9b-29b3-45ea-b455-f7b1fbe0dd97" alt="Cartoon pic"/>
                <img class="carousel-item" href="#three!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/spider-man-3-avengers-endgame.webp?alt=media&token=a6a25fb5-4c14-48a6-a32f-9ec4b21ccfaa" alt="Cartoon pic"/>         
              </div>
              <div className="card-content">
                <span className="card-title grey-text text-darken-4">Movie page <div className="flow-text activator grey-text right" style={{fontSize:'55%'}}>View comments</div></span>
                <p><Link to={`/movielist`} style={{textDecoration:'none'}}>
                  <p>CLICK ME</p> 
                   </Link></p>
                   </div>
                 <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Comments:<i className="material-icons right">close</i></span>
                {comment_movie1 && comment_movie1.map((commentm)=>(
                  <p>>>> {commentm.comment_movie}</p>
                ))}
                 <div class="card-action" style={{bottom:'-19%'}}>
              <form onSubmit={onsubmit1} >
                     <div  >
                     <input style={{width:'86%'}} type="text" name='comment_movie' value={comment_movie} onChange={e=>{setComment_movie(e.target.value)}} placeholder="Add a comment..." required/>
                      <Button type='submit' color="primary" className="right activator" style={{width:'10%',marginRight:'-2%'}}>Post</Button>
                     </div>
                     </form>
                </div>
                </div>
             
            </div>
            
            
            <div className="card">
            <div className="card-image carousel carousel-slider">
                <img class="carousel-item" href="#two!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Scorpion-8.jpg?alt=media&token=db321ea7-fdb3-4ad8-8b74-344c648a8f9e" alt="Cartoon pic"/>
                <img class="carousel-item" href="#one!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/money_heist_season_5_nairobi_main.jpg?alt=media&token=9673b997-3e6e-45b8-b877-0beb6c2eecab"  alt="Cartoon pic"/>
                <img class="carousel-item" href="#three!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Suid-Game-Netflix-1200by667.jpg?alt=media&token=e7dd6883-b90c-4848-bf94-d2060af66a0e" alt="Cartoon pic"/>         
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"> TV shows /Series page <div className="flow-text activator grey-text right" style={{fontSize:'55%'}}>View comments</div></span>
                <p><Link to={`/serielist`} style={{textDecoration:'none'}}>
                  <p>CLICK ME</p> 
                   </Link></p>
                   </div>
                 <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Comments: <i className="material-icons right">close</i></span>
                {comment_serie1 && comment_serie1.map((comments)=>(
                  <p>>>> {comments.comment_serie}</p>
                ))}
                <div class="card-action" style={{bottom:'-19%'}}>
              <form onSubmit={onsubmit2} >
                     <div>
                     <input style={{width:'86%'}} type="text" name='comment_serie' value={comment_serie} onChange={e=>{setComment_serie(e.target.value)}} placeholder="Add a comment..." required/>
                      <Button type='submit' color="primary" className="right activator" style={{width:'10%',marginRight:'-2%'}}>Post</Button>
                     </div>
                     </form>
                </div>
                </div>
              
            </div>
            
            
            <div className="card">
              <div className="card-image carousel carousel-slider center">
                <img class="carousel-item" href="#one!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/_114896031_screenshot-1372.png?alt=media&token=ca7ddf12-73fa-4ef9-99d8-02ee348bd11b"  alt="Cartoon pic"/>
                <img class="carousel-item" href="#two!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/Luca_poster.webp?alt=media&token=36be1d45-3894-46b9-aa9a-7c1e4641c0e0" alt="Cartoon pic"/>
                <img class="carousel-item" href="#three!" src="https://firebasestorage.googleapis.com/v0/b/movie-app-62211.appspot.com/o/moana_review_0.webp?alt=media&token=ac8e9ea8-7ba2-42f8-ad6d-d26b733b471d" alt="Cartoon pic"/>         
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Animation page <div className="flow-text activator grey-text right" style={{fontSize:'55%'}}>View comments</div></span>
                <p><Link to={`/animationlist`} style={{textDecoration:'none'}}>
                  <p>CLICK ME</p> 
                   </Link></p>
                   </div>
                 <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Comments: <i className="material-icons right">close</i></span>
                {comment_anime1 && comment_anime1.map((comment)=>(
                  <p>>>> {comment.comment_anime}</p>
                ))}
                <div class="card-action" style={{bottom:'-19%'}} >
                     <form onSubmit={onsubmit3} >
                     <div>
                     <input style={{width:'86%'}} type="text" name='comment_anime' value={comment_anime} onChange={e=>{setComment_anime(e.target.value)}} placeholder="Add a comment..." required/>
                      <Button type='submit' value="Reload Page"  color="primary" className="right" style={{width:'10%',marginRight:'-2%'}}>Post</Button>
                     </div>
                     </form>
               </div>
                </div>
              
            </div>

          </div>
            <Footerhome/>
          </div>
      );
  }
  export default Home;
import {useEffect} from "react";
import { Link } from "react-router-dom";
const Submitpage=()=>{
    useEffect(()=>{
        const FetchReviews=async()=>{
            const res=await fetch('http://localhost:5000/posts');
            const data=await res.json();
            console.log(data)
        }
        FetchReviews()
    },[])
    return(
        <div style={{textAlign:'center'}}>
        <h2 style={{color:'green'}}>welcome</h2>
        <Link to='/'>Back</Link>
        </div>
    )
}
export default Submitpage;
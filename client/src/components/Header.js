const Header= ({title,title1,hr})=>{
    return(
    <>
    <h1 style={{marginLeft:'200px', marginBottom:'-20px'}}>{title}</h1>
    <h1>{title1}</h1>
    <p style={{borderBottom:'1px solid grey'}}>{hr}</p>
    </>
    );
}

export default Header;
/*
 import React from "react";
class Header extends React.Component{
    render(){
        return(
            <h1>Movies</h1>
        );
    }
}
export default Header;*/
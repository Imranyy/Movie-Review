const Header= ({title,title1})=>{
    return(
    <>
    <h1 style={{marginLeft:'200px'}}>{title}</h1>
    <h1>{title1}</h1>
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
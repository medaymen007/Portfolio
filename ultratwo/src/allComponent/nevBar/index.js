import React from 'react'
import {Link} from 'react-router-dom';
import {Scrollbar} from 'smooth-scrollbar-react';
import  "./style.css"
function NevBar() {
  return (
    <div className="navbar">
            
    <div className="container">
        
        <div className="logo">
            <h2 className="logo-text">Ultra Profile</h2>
        </div>
        
       
        
        <ul className="ul-list">
        <Scrollbar
          damping={1}
          thumbMinSize={10}
          renderByPixels={true}
          alwaysShowTracks={true}
          continuousScrolling={true}
>
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><a href="#WORK">Work</a></li>
            <li className="list-item"><a href="#PORTFOLIO">Portfolio</a></li>
            <li className="list-item"><a href="#ABOUT">About</a></li>
            <li className="list-item"><Link to={"/contact"} >Contact</Link></li>   
         </Scrollbar>   
        </ul>
    </div>
</div>
  )
}

export default NevBar
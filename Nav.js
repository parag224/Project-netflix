import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  
  const transitionNavbar = () => {
    if (window.scrollY > 100){
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
        <img 
        onClick={() => history.push("/")}
        className="nav_logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />

        <img
        onClick={() => history.push("/profile")}
        className="nav_avatar" 
        src="https://dynamic.brandcrowd.com/preview/logodraft/c8f05b32-b091-4f93-8033-7d6e58850629/image/large.png" alt="" />
         
        </div> 

            </div>
  );
}

export default Nav
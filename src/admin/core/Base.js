import React from "react"
import Menu from "./Menu"
const Base=  ({
title= "My Title",
description= "My description",
className= "bg-dark text-white p-4",
children


})=>
 (
    <div>
        <Menu/>
        <div className="container-fluid">
          <div className= "jumbotron bg-dark text-white text-center">
             <h2 className= "display-4">{title}</h2>
             <p className="Lead">{ description}</p> 

        </div>
<div className={className}>{children}</div>
    </div>
<footer className = "footer bg-dark mt-auto py-3">
    <div className = "contanier-fluid bg-success text-white text-center">
      <h4> if you have any question feel free to ask!</h4>
     <button className= "btn btn-warning btn-lg">Contact us</button>
    </div>
   <div className="container">
       <span className= "text-muted"> An amazing <span className="text-white">Mern</span> bootcamp</span>
   </div>

</footer>

    </div>
);


export default Base;
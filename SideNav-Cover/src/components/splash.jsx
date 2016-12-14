import React from 'react';
import ReactBootstrap from 'react-bootstrap';


export default React.createClass({
  render: function (){
    return (
       <div>
          <div id="my-side-nav" className="sidenav">
              <center><a href="javascript:void(0)" className="closebtn" onClick={this.onClose}>Close</a></center>
              <center><a href="#">Home</a></center>
              <br />
              <center><a href="#">About</a></center>
              <br />
              <center><a href="#">Contact</a></center>
              <br />
              <center><a href="#">Blog</a></center>
          </div>

          <button onClick={this.onOpen}>Click Here</button>
    

          <div id="main">
             <center><h1> Full width Navigation </h1></center>
          </div>
         
       </div>
    )
  },
  onOpen: function(){
           document.getElementById("my-side-nav").style.width = "100%";
          //  document.getElementById("main").style.marginLeft = "250px";
          //  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  },
  onClose: function(){
           document.getElementById("my-side-nav").style.width = "0";
          //  document.getElementById("main").style.marginLeft = "0";
          //  document.body.style.backgroundColor = "white";
  }


})

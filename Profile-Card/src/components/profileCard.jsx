import React from 'react';
import '../../public/css/profileCard.css';

const ProfileCard = React.createClass({
    render() {
        return (
           <div className="card">
             <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt="Avatar"></img>
             <div className="container">
               <h4><b>John Doe</b></h4>
               <p>Architect & Engineer</p>
             </div>
           </div>
        )
    }
})

export default ProfileCard;






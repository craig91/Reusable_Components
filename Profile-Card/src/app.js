import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from './components/profileCard.jsx';

const App = React.createClass({
    render() {
        return (
           <div>


            <ProfileCard />

           </div>
        )
    }
})

ReactDOM.render(
    <App/>,
    document.getElementById("root"))

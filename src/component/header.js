import React from "react";

function Header(props) {
    
    return (

            <header>
                <h1>NASA Photo of the Day!</h1>
                <h2>Date: {props.date}</h2>
            </header>
    
)

};

export default Header
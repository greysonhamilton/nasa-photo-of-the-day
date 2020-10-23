import React from "react";
import Image from 'image';

const Header = () => {

    const today = new Date();
    
    return (

            <header>
                <h1>NASA Photo of the Day!</h1>
                <h2>Date: {today}</h2>
            </header>
    
)

};

export default Header
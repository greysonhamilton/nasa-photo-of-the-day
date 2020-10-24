import React, { useState } from "react";

const HeaderNav = () => {

    const [day] = useState(Date());

    return (

            <header>
                <h1>NASA Photo of the Day!</h1>
                <h2>Date: {day}</h2>
            </header>
    
)

};

export default HeaderNav
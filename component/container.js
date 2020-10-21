import React, { useState } from "react";
import axios from "axois";

const Data = () => {
    axios.get('https://api.nasa.gov/#apod');

    return (
            <div>
            <header>
                <h1>NASA Photo of the Day!</h1>
                <h2>Date: {Data.date}</h2>
            </header>
            <main>
                <content date = {data} />
            </main>
        </div>
        
    )
}
export default Container;
import React, { useEffect, useState } from "react";
import axios from "axios";

function Header() {
    
    const [data, setData] = useState({});

    useEffect((() => {

        axios.get('https://api.nasa.gov/#apod');

        .then((res) => {
            console.log('name the log', res.data)
            setData(res.data);

        })

        .catch((err) => {
            console.log('name the log', err)

        })

    }, []));

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

};

export default Header
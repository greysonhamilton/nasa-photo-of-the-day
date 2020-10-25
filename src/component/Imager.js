import React, { useEffect, useState } from "react";
import axios from 'axios';

const Imager = () => {

    const [data, setData] = useState({});

    useEffect((() => {

        axios.get('https://api.nasa.gov/planetary/apod?api_key=qwPThXpo4PqhkcXFhR3Kbg99BdPQoFaGPFQSDM1Q&date=2020-10-21')
    
        .then((res) => {
            console.log('name the log', res.data)
            setData(res.data);
    
        })
    
        .catch((err) => {
            console.log('name the log', err)
    
        })
    
    }));

    return (

        <div className = "nasaImage">

            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <img src={data.hdurl} alt={data.title} />
            <p>{data.explanation}</p>
            <p>Photo Copyright: {data.copyright}</p>

        </div>
    )
}

export default Imager
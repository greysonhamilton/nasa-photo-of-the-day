import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'card';

function Image () {

    const [data, setData] = useState([]);

    const today = new Date();
    console.log(today);

    useEffect((() => {

        axios.get('https://api.nasa.gov/planetary/apod?api_key=qwPThXpo4PqhkcXFhR3Kbg99BdPQoFaGPFQSDM1Q&date=2020-10-21')
    
        .then((res) => {
            console.log('name the log', res.data)
            setData(res.data);
    
        })
    
        .catch((err) => {
            console.log('name the log', err)
    
        })
    
    }, []));

    return (

        <div className = "nasaImage">

            <Card key={data.index} hdurl={data.hdurl} explanation={data.explanation} date={data.date} title={data.title} />

        </div>
    )
}

export default Image
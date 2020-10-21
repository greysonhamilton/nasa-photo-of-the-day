import React from "react";

function Data ({data}) {

    return (

        <section className = 'data'>
            <img src = {data.url} alt = 'nasaPhoto'></img>
            <h3>{data.title} - {data.copyright}</h3>
            <p>{data.explanation}</p>
        </section>
    )
}

export default Data
import React from 'react';



export const News =({ simplified }) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1f6c774280mshbd3b108dbe1033bp176a90jsndf0ae21c8e8e',
            'X-RapidAPI-Host': 'blockchain-news1.p.rapidapi.com'
        }
    };
    
    fetch('https://blockchain-news1.p.rapidapi.com/news/NDTV', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return(
        <div>
            <h1>This is news page</h1>
        </div>
    )
}


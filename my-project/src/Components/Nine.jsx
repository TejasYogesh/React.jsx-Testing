import React from 'react'

const Nine = () => {
    let quotes = ["hello Good morning", "Hello Good AfterNoon", "Hello Good Night"];
    let randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(Math.round(Math.random()*2))
    console.log(randomNumber)
    quotes[randomNumber];
    console.log(quotes[randomNumber])
    return (
        <div>
            {quotes[randomNumber]}
        </div>
    )
}

export default Nine

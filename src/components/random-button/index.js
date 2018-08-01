import React, { Component } from 'react';

import moviesData from '../../../public/static/data/movies.json';
const moviesLength = moviesData.movies.length;
const randomNumber = getRandomInt(0, moviesLength);

// window.onload = () => {
//     let randomButtonDOMElement = document.getElementById('random-button');
//     console.dir(randomButtonDOMElement.href);
  
//     randomButtonDOMElement.href = randomButtonDOMElement.href + '/' + moviesData.movies[randomNumber].urlName
//   }

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class RandomButton extends Component {
    render () {
        return (
                <a
                    id="random-button"
                    href={`/movies/${randomNumber}`}
                    onClick={(e) => {
                    e.preventDefault();
                    const randomNumber = getRandomInt(0, moviesLength);
                    document.location.replace(`/movies/${randomNumber}`);
                }}
            > 
                Get Random
            </a>
        )
    }
}

export default RandomButton;

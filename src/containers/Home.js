// import React from 'react'
// import { withSiteData } from 'react-static'
// //
// import logoImg from '../logo.png'

// export default withSiteData(() => (
//   <div>
//     <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
//     <img src={logoImg} alt="" />
//   </div>
// ))
import AkiraImg from '../../public/static/images/akira-scope-gunshooting.jpg';
import BladeRunnerImg from '../../public/static/images/blade-runner.jpg';
import BTTFImg from '../../public/static/images/Back-To-The-Future-Movie-Facts-Trivia.jpg';
import superImg from '../../public/static/images/super.jpg';

import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

import MoviesList from '../components/movies-list/index.js';
import MoviesCard from '../components/movies-card/index.js';

export default withSiteData(() => (
  <MoviesList>
    <div>
      <MoviesCard
        movieTitle='Blade Runner'
        movieInfo='(1982) Sci-Fi, Thriller'
        movieDesc='A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.'
        openLink='https://www.youtube.com/watch?v=eogpIG53Cis'
        imgUrl={ BladeRunnerImg }
      />
      <MoviesCard
        movieTitle='BACK TO THE FUTURE'
        movieInfo='(1985) ADVENTURE, COMEDY, SCI-FI'
        movieDesc='Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.'
        openLink='https://www.youtube.com/watch?v=qvsgGtivCgs'
        imgUrl={ BTTFImg }
      />
      <MoviesCard
        movieTitle='AKIRA'
        movieInfo='(1988) ANIMATION, ACTION, DRAMA'
        movieDesc='A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.'
        openLink='https://www.youtube.com/watch?v=ea_5TJus7pI'
        imgUrl={ AkiraImg }
      />
      <MoviesCard
        movieTitle='Super'
        movieInfo='Super (2010)'
        movieDesc='After his wife falls under the influence of a drug dealer, an everyday guy transforms himself into Crimson Bolt, a superhero with the best intentions, but lacking in heroic skills.'
        openLink='https://www.imdb.com/title/tt1512235/'
        imgUrl={ superImg }
      />
    </div>
  </MoviesList>
))

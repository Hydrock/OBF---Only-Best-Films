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
        imgUrl='http://digitalspyuk.cdnds.net/15/47/1600x800/landscape-1447754794-harrison-ford-blade-runner.jpg'
      />
      <MoviesCard
        movieTitle='BACK TO THE FUTURE'
        movieInfo='(1985) ADVENTURE, COMEDY, SCI-FI'
        movieDesc='Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.'
        imgUrl='http://www.blastr.com/sites/blastr/files/back-to-the-future-part-ii-original.jpg'
      />
      <MoviesCard
        movieTitle='AKIRA'
        movieInfo='(1988) ANIMATION, ACTION, DRAMA'
        movieDesc='A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.'
        imgUrl='http://www.dvdactive.com/images/reviews/screenshot/2011/5/akirabdcap8_original.jpg'
      />
    </div>
  </MoviesList>
))

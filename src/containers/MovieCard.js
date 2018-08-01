import React from 'react'
import { withRouteData } from 'react-static';

import MoviesCard from '../components/movies-card/index.js';

export default withRouteData(({ movie }) => (
    <MoviesCard
        movieTitle={movie.name}
        // movieInfo='(1982) Sci-Fi, Thriller'
        // movieDesc='A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.'
        // openLink='https://www.youtube.com/watch?v=eogpIG53Cis'
        imgUrl={ require(`../../public/static/images/${movie.urlImg}.jpg`) }
    />
))

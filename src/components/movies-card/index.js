import React, { Component } from 'react';

class MoviesCard extends Component {
    // Props
    // - movieTitle - Blade Runner
    // movieInfo
    // movieDesc
    // imgUrl

    render () {
        return (
            <div class="movie-card" style={{backgroundImage: 'url(' + this.props.imgUrl + ')'}}> 
                <div class="color-overlay">
                    <div class="movie-content">
                        <div class="movie-header">
                            <h1 class="movie-title">
                                {this.props.movieTitle}
                            </h1>
                            <h4 class="movie-info">
                                {this.props.movieInfo}
                            </h4>
                        </div>
                        <p class="movie-desc">
                            {this.props.movieDesc}
                        </p>
                        <a class="btn btn-outline" target='_blank' href={this.props.openLink}>Watch Trailer</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesCard;

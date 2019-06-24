import React from 'react';
import { Link } from 'react-router-dom'
// Function to return a movie card.
// There is no imgSrc value yet do not attempt to display an img.
function MovieCard({ movie ,imgSrc, plot }) {
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${movie.id}`} className="links" key={movie.id}>
      <div className="movie-card">
        <div>
          <h2>{title}</h2>
          {(imgSrc != null) 
                ? <img src={`https://image.tmdb.org/t/p/w185/${imgSrc}`}></img>
                : null
          }
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="plot">
          <p>{plot}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

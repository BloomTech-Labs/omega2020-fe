import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewPuzzle = props => {
  const [newPUzzle, setPuzzle] = useState([])
  useEffect(() => {
    const getPuzzles = () => {
        localStorage.getItem("");
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setPuzzle(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getPuzzles();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
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
  );
}

export default NewPuzzle;
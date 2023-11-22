import React from 'react';
import './styles.css';
import MovieCard from './components/MovieCard/MovieCard';
import moviesData from './movies_data';

export default function App() {
  return (
    <div className="container p-4">
      <h1 className="display-4 mb-4">Lista de peliculas</h1>

      <div>
        {moviesData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
0;
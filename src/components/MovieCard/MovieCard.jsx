import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetColorForMetascore } from '../MovieCard/getColorForMetascore.util';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

// Componente principal
const MovieCard = ({ movie }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0 card-body">
        <div className="col-md-3">
          <MoviePoster movie={movie} />
        </div>
        <div className="col-md-8">
          <MovieInfoContent movie={movie} />
        </div>
      </div>
    </div>
  );
};

const MoviePoster = ({ movie }) => {
  return <img src={movie.poster} alt={movie.title} className="img-fluid" />;
};

const MovieInfoContent = ({ movie }) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <MovieDetails movie={movie} />
      <MovieRatings movie={movie} />
      <p className="card-text">{movie.plot}</p>
      <MovieCast movie={movie} />
      <MovieDirector movie={movie} />
    </div>
  );
};

const MovieDetails = ({ movie }) => {
  return (
    <div className="row mb-2">
      <div className="col-5">
        <small className="text-muted">{movie.releaseDate}</small>
      </div>
      <div className="col-">
        <small>{movie.duration} </small>
      </div>
      <div className="col-">
        <small>{movie.genres.join(', ')} </small>
      </div>
      <div className="col-">
        <small className="text-muted">{movie.maturity}</small>
      </div>
    </div>
  );
};

const MovieRatings = ({ movie }) => {
  return (
    <div className="row mb-2">
      <div className="col-4">
        <span
          className={`badge text-bg-${GetColorForMetascore(movie.metascore)}`}
        >
          Metascore {movie.metascore}
        </span>
      </div>
      <div className="col-2">
        <FontAwesomeIcon icon={faStarSolid} color="gold" />
        <small> {movie.rating} </small>
      </div>
    </div>
  );
};

const MovieCast = ({ movie }) => {
  return (
    <div className="elenco">
      <small className="fw-bold"> Actores principales: </small>
      <small className="text-muted">{movie.mainActors.join(', ')}</small>
    </div>
  );
};

const MovieDirector = ({ movie }) => {
  return (
    <div className="row">
      <div className="col">
        <small className="fw-bold">Director: </small>
        <small className="text-muted">{movie.director} </small>
      </div>
    </div>
  );
};

export default MovieCard;

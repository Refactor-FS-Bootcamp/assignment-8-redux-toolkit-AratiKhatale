import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../feature/movies/movieSlice'
import MovieDetails from './MovieDetails';
import './MovinigListinig.css'

const MovieListinig = () => {
    const movies = useSelector(getAllMovies);
    console.log(movies)
  return (
    <div className='movie-wrapper'>
        <div className='movie-list'>
            <h2>Movies</h2>
            <div className='movie-container'>
                {movies && movies.length && movies.map(movie => <MovieDetails key=
                {movie.id} data={movie} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieListinig
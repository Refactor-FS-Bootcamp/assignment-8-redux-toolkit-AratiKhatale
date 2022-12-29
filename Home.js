import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import movieApi from '../common/apis/movieApi'
import { APIKey } from '../common/apis/MovieApiKey'
import { addMovies } from '../feature/movies/movieSlice'
import MovieListinig from './MovieListinig'

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async() => {
            const response = await movieApi.get(`movie?api_key=${APIKey}`); 
            dispatch(addMovies(response.data.results));
        }

        fetchMovies();
    },[])
  return (
    <>
        <div className='banner-img'>
            <MovieListinig />
        </div>
    </>
  )
}

export default Home;
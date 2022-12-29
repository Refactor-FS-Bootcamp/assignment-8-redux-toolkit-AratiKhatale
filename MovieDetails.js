import React from 'react'
import './MovieDetail.css'

const IMGPATH = 'https://image.tmdb.org/t/p/w2081';

const MovieDetails = (props) => {
    const { data } = props;
  return (
    <div className='card-item'>
        <div className='card-inner'>
            <div className='card-top'>
                <img src={IMGPATH + data.poster_path} alt={data.title}/>
            </div>
            <div className='card-bottom'>
                <div className='card-info'>
                    <h4>{data.title}</h4>
                    <p>{data.release_data}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails
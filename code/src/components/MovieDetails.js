import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const { movieInfo } = useParams();

  const onBackButtonClick = () => {
    navigate(-1)
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieInfo}?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US&page=1`)
      .then((response) => response.json())
      .then((fetchData) => {
        setDetails(fetchData);
        console.log(fetchData);
      });
  }, [movieInfo]);

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back!</button>
      <h2>{details.original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`}
        alt={details.original_title} />
    </div>
  )
}

export default MovieDetails

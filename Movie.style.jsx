import React, { useState } from 'react';
import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

const MovieContainer = styled.div`
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: background-color 0.3s;

  &:hover {
    background-color: #22254b;
  }
`;

const MoviePoster = styled.div`
  position: relative;
  overflow: hidden;

  img {
    max-width: 100%;
    display: block;
    transition: transform 0.3s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const MovieOverview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  color: white;
  padding: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const MovieTitle = styled.h4`
  margin: 0;
`;

const MovieRating = styled.span`
  margin-left: 3px;
`;

function Movie({ title, poster_path, vote_average, overview }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MovieContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MoviePoster>
        <img src={`${IMG_BASE_URL}${poster_path}`} alt="영화 포스터" />
        {isHovered && (
          <MovieOverview onClick={() => setIsHovered(false)}>
            <p>{overview}</p>
          </MovieOverview>
        )}
      </MoviePoster>
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieRating>{vote_average}</MovieRating>
      </MovieInfo>
    </MovieContainer>
  );
}

export default Movie;

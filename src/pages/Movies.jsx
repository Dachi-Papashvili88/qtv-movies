import React, { useState } from "react";
import movies from "../../moviesData.json";
import { AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";

const Movies = () => {
  const [playMovie, setPlayMovie] = useState(false);

  const showMovie = () => {
    setPlayMovie(!playMovie);
  };

  return (
    <Wrapper>
      <h1>ფილმები</h1>
      <ul onClick={showMovie}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.src} alt={`Movie ${movie.id}`} />
            <div className="icon">
              <AiOutlineHeart />
            </div>
            {playMovie && <h5>{movie.year}</h5>}
            {playMovie && <p>{movie.description}</p>}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Movies;

const Wrapper = styled.div`
  .icon {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    opacity: 0;
    :hover {
      opacity: 1;
      transition: 0.7s;
    }
  }

  ul {
    display: grid;
    gap: 20px;
    max-width: 1400px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, auto);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(5, auto);
    }
  }

  li {
    position: relative;
    list-style-type: none;
    :hover {
      cursor: pointer;
      opacity: 0.8;
      transition: 0.7s;
    }
  }

  img {
    border-radius: 5px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      width: 95%;
    }
    @media (min-width: 768px) {
      width: 80%;
    }
  }
`;

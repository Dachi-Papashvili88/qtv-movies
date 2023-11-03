import movies from "../../moviesData.json"; // Importing JSON data
import styled from "styled-components";

const Movies = () => {
  return (
    <Wrapper>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.src} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Movies;

const Wrapper = styled.div`
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

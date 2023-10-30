import movies from "../../moviesData.json"; // Importing JSON data
import styled from "styled-components";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Movies = () => {
  return (
    <Wrapper>
      <h1>Movie List</h1>
      <ul>
      <AiOutlinePlayCircle className="icon"/>

        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
            <video controls>
              <source src={movie.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Movies;

const Wrapper = styled.div`
  video {
    width: 100%;
    margin: 20px auto;
  }
  .icon {
    position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    color: red;

  }
`;

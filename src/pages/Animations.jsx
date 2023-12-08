import animations from "../../animationsData.json"; // Importing JSON data
import styled from "styled-components";

const Animations = () => {
  return (
    <Wrapper>
      <h1>ანიმაციები</h1>
      <ul>
        {animations.map((animation) => (
          <li key={animation.id}>
            <img src={animation.src} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Animations;

const Wrapper = styled.section`
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
      height: 280px;
    }
    @media (min-width: 768px) {
      width: 80%;
      height: 70vh;
    }
  }
`;

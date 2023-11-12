import Movies from "../../moviesData.json";

const Row = () => {
    return (
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.src} alt={movie.title} />
          </li>
        ))}
      </div>
    );
  };
  
  export default Row;

import movies from "../../moviesData.json"; // Importing JSON data

const Animations = () => {
    return (
        <ul>

        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
            <img src={movie.src} />
          </li>
        ))}
      </ul>
    )
}

export default Animations 
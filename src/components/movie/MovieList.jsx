import { useEffect, useState } from 'react';
import getMovieData from '../../utils/movieData';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieData();
        console.log(data);
        setMovies(
          data.results.slice(0, 12).sort((a, b) => {
            return (
              Number(b.release_date.split('-')[0]) -
              Number(a.release_date.split('-')[0])
            );
          })
        );
      } catch (err) {
        console.error('Error fetching movie data:', err.message);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

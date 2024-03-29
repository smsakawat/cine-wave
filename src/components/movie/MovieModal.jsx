import { useContext } from 'react';
import { ThemeContext } from '../context/contexts';
import AddToCartBtn from './AddToCartBtn';

const MovieModal = ({ movie, onClose }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/10 backdrop-blur-md bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `${
          darkMode
            ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.95))'
            : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.85))'
        }, url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
      }}
      src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            alt={movie.title}
          />
          <div className="p-5 lg:p-11 self-center">
            <div className="">
              <h2 className="text-3xl lg:text-4xl leading-tight mb-2 font-bold">
                {movie.title}
              </h2>
              <span className="block text-sm text-[#9fa0a4] dark:text-[#575A6E] my-3">
                {movie.release_date}
              </span>
            </div>
            <p className="text-sm lg:text-base mb-8 lg:mb-16">
              {movie.overview}
            </p>
            <div className="grid lg:grid-cols-2 gap-2">
              <AddToCartBtn movie={movie} />
              <a
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                href="#"
                onClick={onClose}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

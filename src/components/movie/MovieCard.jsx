import React from 'react';
import AddToCartBtn from './AddToCartBtn';
import Rating from './Rating';

const MovieCard = ({ movie = {} }) => {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl  group">
      <a href="#">
        <img
          className="w-full object-cover object-center group-hover:brightness-50 transition"
          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.release_date}</p>
          <Rating value={Math.floor(movie.vote_average / 2)} />
          <AddToCartBtn />
        </figcaption>
      </a>
    </figure>
  );
};

export default MovieCard;

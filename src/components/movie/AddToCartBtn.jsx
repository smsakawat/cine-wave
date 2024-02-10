import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Tag from '../../assets/icons/tag.svg';
import { MovieContext } from '../context/contexts';

const AddToCartBtn = ({ movie }) => {
  const {
    state: { cartData },
    dispatch,
  } = useContext(MovieContext);
  return (
    <a
      className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm w-full hover:bg-primary/80 transition-all cursor-pointer"
      onClick={e => {
        e.stopPropagation();
        const found = cartData.find(m => m.id === movie.id);
        if (!found) {
          dispatch({
            type: 'ADD_TO_CART',
            payload: movie,
          });
          toast.success(`${movie.title} added to cart`);
          return;
        }
        toast.error(`${movie.title} already added to cart`);
      }}
    >
      <img src={Tag} alt="tag-icon" />
      <span>Add to Cart</span>
    </a>
  );
};

export default AddToCartBtn;

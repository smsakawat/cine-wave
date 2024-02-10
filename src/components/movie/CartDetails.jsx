import { useContext } from 'react';
import { toast } from 'react-toastify';
import CheckoutIcon from '../../assets/icons/checkout.svg';
import RemoveIcon from '../../assets/icons/delete.svg';
import { MovieContext } from '../context/contexts';
import Rating from './Rating';

const CartDetails = ({ onClose }) => {
  const {
    state: { cartData },
    dispatch,
  } = useContext(MovieContext);

  // Delete movie from cart
  const handleRemoveFromCart = function (movie) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: movie,
    });
    toast.success(`${movie.title} removed from cart`);
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md  md:max-w-xl lg:max-w-3xl p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {cartData.length > 0 ? (
              cartData.map(movie => (
                <div
                  className="grid grid-cols-[1fr_auto] gap-4 items-center"
                  key={movie.id}
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="rounded overflow-hidden"
                      src={
                        'https://image.tmdb.org/t/p/w500' + movie.poster_path
                      }
                      alt={movie.title}
                      width="48"
                      height="48"
                    />
                    <div>
                      <h3 className="text-base md:text-xl font-bold">
                        {movie.title}
                      </h3>
                      <p className="text-[#575A6E] text-sm mb-2">
                        {movie.release_date}
                      </p>
                      <Rating value={Math.floor(movie.vote_average / 2)} />
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <button
                      className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white hover:bg-[#D42967]/80 transition-all"
                      onClick={() => handleRemoveFromCart(movie)}
                    >
                      <img className="w-5 h-5" src={RemoveIcon} alt="" />
                      <span className="max-md:hidden">Remove</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h3 className="text-zinc-400 dark:text-slate-300 text-center font-semibold text-3xl">
                Cart is empty
              </h3>
            )}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm hover:bg-primary/80 transition-all"
              href="#"
            >
              <img src={CheckoutIcon} width="24" height="24" alt="" />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-slate-800 transition-all"
              href="#"
              onClick={onClose}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

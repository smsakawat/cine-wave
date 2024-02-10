//If there's multiple chance of having related state's or state's that changes together,

const initialState = {
  cartData: [],
};

const movieReducer = function (state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        cartData: [...state.cartData, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        cartData: state.cartData.filter(
          movie => movie.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export { initialState, movieReducer };

import { useReducer, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieContext, ThemeContext } from './components/context/contexts';
import Page from './components/ui/Page';
import { initialState, movieReducer } from './reducers/cartReducer';

const App = () => {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer position="bottom-right" autoClose={2000} />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

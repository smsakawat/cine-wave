import { useState } from 'react';
import { MovieContext } from './components/context/contexts';
import MovieContent from './components/movie/MovieContent';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';

const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <MovieContent />
        <Footer />
      </MovieContext.Provider>
    </>
  );
};

export default App;

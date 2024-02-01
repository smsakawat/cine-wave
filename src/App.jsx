import MovieContent from './components/movie/MovieContent';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';

const App = () => {
  //getting movie details

  // useEffect(() => {
  //   getMovieData();
  // }, []);

  return (
    <>
      <Header />
      <MovieContent />
      <Footer />
    </>
  );
};

export default App;

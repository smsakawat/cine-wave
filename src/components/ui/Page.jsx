import { useContext } from 'react';
import { ThemeContext } from '../context/contexts.js';
import MovieContent from '../movie/MovieContent.jsx';
import Footer from './Footer';
import Header from './Header';
const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Header />
      <MovieContent />
      <Footer />
    </div>
  );
};

export default Page;

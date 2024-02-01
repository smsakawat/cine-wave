import MovieList from './MovieList';
import SideBar from './SideBar';

const MovieContent = () => {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieList />
      </div>
    </main>
  );
};

export default MovieContent;

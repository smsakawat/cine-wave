export default async function getMovieData() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=b7cca83fc43d82f4c2592f15d6e55468'
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Error fetching data:', err.message);
  }
}

export function getMoviesWithImage(data) {
  const filter = data.filter((movie) => movie.backdrop_path);
  return filter;
}

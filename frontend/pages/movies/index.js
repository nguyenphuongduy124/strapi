// import fetch from "isomorphic-unfetch";
import { Box, Flex } from "reflexbox";
import { useRouter } from "next/router";
function MoviesPage({ movies, page, totalPage }) {
  const router = useRouter();
  return (
    <Box variant="container" pt={40}>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>
      <Flex maxWidth={300} mt={40} pl={20} justifyContent="space-between">
        <button onClick={() => router.push(`/movies?page=${page - 1}`)} className="button" disabled={page <= 1}>
          Previous
        </button>
        <button onClick={() => router.push(`/movies?page=${page + 1}`)} className="button" disabled={page >= totalPage}>
          Next
        </button>
      </Flex>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const limitPage = 5;
  const { API_URL } = process.env;
  const start = (page - 1) * limitPage;
  const res = await fetch(`${API_URL}/movies?_limit=${limitPage}&_start=${start}`);
  const data = await res.json();
  const countOfMoviesResponse = await fetch(`${API_URL}/movies/count`);
  const countOfMovies = await countOfMoviesResponse.json();
  const totalPage = Math.ceil(countOfMovies/limitPage);
  return {
    props: {
      movies: data,
      page: +page,
      totalPage
    },
  };
}

export default MoviesPage;

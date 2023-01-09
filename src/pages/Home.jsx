import React, { useEffect, useState } from 'react';
import { Container, Grid, TextInput, Title } from '@mantine/core';
import { MovieCard, withMovieData } from '../components';
import { getMoviesWithImage } from '../utils';

function Home({ movies }) {
  const { results } = movies;
  const [data, setData] = useState(getMoviesWithImage(results));
  const [textEntered, setTextEntered] = useState('');

  useEffect(() => {
    async function searchMovie() {
      if (textEntered) {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${textEntered}`
        );

        const data = await response.json();
        setData(getMoviesWithImage(data.results));
      } else setData(getMoviesWithImage(results));
    }
    searchMovie();
  }, [results, textEntered]);

  const onChange = (event) => setTextEntered(event.currentTarget.value);

  return (
    <Container>
      <Title color={'pink'} mb="xl" mt="sm">
        Movie App 🍿
      </Title>

      <TextInput
        placeholder="Enter movie's title"
        label="Search Movie"
        mb="xl"
        onChange={onChange}
      />
      {data.length === 0 ? (
        <Container size="xs" px="xs">
          Error 💥 : Movie not found
        </Container>
      ) : (
        <Grid>
          {data.map(({ title, overview, backdrop_path, vote_average, id }) => (
            <Grid.Col key={id} sm={6} lg={4}>
              <MovieCard {...{ title, overview, backdrop_path, vote_average, id }} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default withMovieData(Home);

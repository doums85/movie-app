import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, LoadingOverlay, Pagination } from '@mantine/core';
import { useParams } from 'react-router-dom';

export default function withMovieData(WrappedComponent) {
  return function (props) {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activePage, setPage] = useState(1);

    const { id: movieId } = useParams();

    useEffect(() => {
      async function getMovies() {
        let url = `${process.env.REACT_APP_API_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${activePage}&language=en-US`;

        if (movieId) {
          url = `${process.env.REACT_APP_API_BASE_URL}/movie/${movieId
            ?.split('=')
            .at(-1)}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        }

        const response = await fetch(url);

        const data = await response.json();

        data ? setMovies(data) : setError(data.status_message);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }

      getMovies();
    }, [activePage, movieId]);

    if (loading) {
      return (
        <LoadingOverlay
          loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
          overlayOpacity={0.3}
          overlayColor="#c5c5c5"
          visible={loading}
        />
      );
    }

    if (error) {
      return (
        <Container size="xs" px="xs">
          Error 💥 : {error}
        </Container>
      );
    }

    return (
      <>
        <WrappedComponent movies={movies} {...props} />
        {!movieId && (
          <Container>
            <Pagination mt="xl" onChange={setPage} total={10} color="pink" />
          </Container>
        )}
      </>
    );
  };
}

// Typing
withMovieData.prototype = {
  WrappedComponent: PropTypes.element,
};

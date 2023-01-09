import { withMovieData } from '../components';
import { Badge, Button, Col, Container, Grid, Group, Image, Text, Title } from '@mantine/core';

function Detail({ movies }) {
  const { title, overview, poster_path, runtime, homepage, genres, vote_average } = movies;

  return (
    <Container >
      <Grid>
        <Col span={2}>
          <Button component="a" href="/" variant="light" color="pink" fullWidth mt="md" radius="md">
            Back
          </Button>
        </Col>
        <Col mt="xl" span={8}>
          <Image
            src={`http://image.tmdb.org/t/p/w1280/${poster_path}`}
            fit="scale-down"
            height={500}
          />

          <Group align={"center"} mt="xl">
            <Title mb="xl" order={1}>
              {title}
            </Title>
            <Badge color="pink" variant="light">
              {vote_average}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {overview}
          </Text>
          <Text mt="xl" size="sm" color="pink">
            Runtime: {runtime} min
          </Text>
          <Group position="apart" mt="md" mb="xs">
            {genres.map(({ name }) => (
              <Badge variant="light">{name}</Badge>
            ))}
          </Group>
          <Button
            component="a"
            href={homepage}
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md">
            Watch
          </Button>
        </Col>
      </Grid>
    </Container>
  );
}

export default withMovieData(Detail);

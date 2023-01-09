import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import React from 'react';

export default function MovieCard({ title, overview, backdrop_path, vote_average, id }) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section component="a" href={`/id=${id}`}>
        <Image src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`} height={166} alt={title} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <div style={{ width: '70%' }}>
          <Text weight={500} lineClamp={1}>
            {title}
          </Text>
        </div>
        <Badge color="pink" variant="light">
          {vote_average}
        </Badge>
      </Group>

      <Text size="sm" lineClamp={3} color="dimmed">
        {overview}
      </Text>

      <Button component="a" href={`/id=${id}`} variant="light" color="blue" fullWidth mt="md" radius="md">
        See more
      </Button>
    </Card>
  );
}

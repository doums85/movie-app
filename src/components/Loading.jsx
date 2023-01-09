import { LoadingOverlay } from '@mantine/core';

export default function Loading({ loading }) {
  return (
    <LoadingOverlay
      loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
      overlayOpacity={0.3}
      overlayColor="#c5c5c5"
      visible={loading}
    />
  );
}

import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

const HomePage = lazy(() =>
  import('./pages').then((module) => {
    return { default: module.HomePage };
  })
);
const DetailPage = lazy(() =>
  import('./pages').then((module) => {
    return { default: module.DetailPage };
  })
);
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Suspense fallback={'Loading'}>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path=":id" element={<DetailPage />} />
          </Route>
        </Routes>
      </Suspense>
    </MantineProvider>
  );
}

export default App;

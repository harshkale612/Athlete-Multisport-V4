import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routes';
import { ThemeProvider } from '../theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;

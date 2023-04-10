import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/routing';

function App() {
  return (
      <React.Suspense fallback={<div>Loading ...</div>}>
          <RouterProvider router={router} />
      </React.Suspense>
  );
}

export default App;

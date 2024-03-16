import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import {
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  // RouterProvider,
} from 'react-router-dom';
import Home from './pages/home/index.tsx';
import Settings from './pages/settings/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: 'team',
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

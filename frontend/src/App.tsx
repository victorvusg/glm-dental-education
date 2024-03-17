import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Settings from './pages/settings';
import NotFound from './pages/404';
import Home from './pages/home';
import Chat from './pages/chat';

function App() {
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
    {
      path: '/chat',
      element: <Chat />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

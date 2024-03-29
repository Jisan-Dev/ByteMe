import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
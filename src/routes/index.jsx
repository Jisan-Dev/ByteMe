import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home/Home';
import Blogs from '../pages/blogs/Blogs';
import Blog from '../pages/blog/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blogs/:id',
        element: <Blog />,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
      },
    ],
  },
]);

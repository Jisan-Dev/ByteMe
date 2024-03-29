import { Outlet } from 'react-router-dom';
import Nav from '../components/nav/Nav';

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
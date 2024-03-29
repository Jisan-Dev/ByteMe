import { Outlet } from 'react-router-dom';
import Nav from '../components/nav/Nav';

const Root = () => {
  return (
    <>
      <header className="h-[68px]">
        <Nav />
      </header>
      <main className="font-gsans">
        <Outlet />
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by ByteMe</p>
        </aside>
      </footer>
    </>
  );
};

export default Root;

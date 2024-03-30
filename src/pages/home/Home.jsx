import { Link } from 'react-router-dom';
import svg from '../../assets/images/wave.svg';

const Home = () => {
  return (
    <div className="relative">
      <div className="hero min-h-[calc(100vh-120px)]">
        <div className="hero-content text-center -mt-16">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="bg-300% bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">ByteBlaze</span>
            </h1>
            <p className="py-6 font-medium">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
            <div className="flex gap-2 justify-center">
              <Link to="" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">Read Blogs</span>
              </Link>
              <Link to="" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">Bookmarks</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src={svg} className="absolute bottom-0 w-full" />
    </div>
  );
};

export default Home;

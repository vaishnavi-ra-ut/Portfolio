import { Link } from 'react-router-dom';

const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-2xl shadow-sm px-4">
      <div className="flex-1">
        <Link to="/" onClick={scrollToTop} className="btn btn-ghost text-xl">Portfolio</Link>
      </div>
      <div className="flex-none space-x-4">
        <Link to="/about" className="btn btn-sm btn-ghost">About</Link>
        <Link to="/projects" className="btn btn-sm btn-ghost">Projects</Link>
        <Link to="/contact" className="btn btn-sm btn-ghost">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;

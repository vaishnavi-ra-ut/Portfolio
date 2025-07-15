const Navbar = () => {
  return (
    <nav className="flex items-center px-12 py-4 fixed top-0 z-50 navbar bg-transparent backdrop-blur-md shadow-xs justify-between left-0 right-0">
      <h2 className="text-2xl font-bold text-gray-400">Vaishnavi</h2>
      <ul className="flex gap-8 list-none m-0">
        <li><a href="#home" className="text-gray-700 hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

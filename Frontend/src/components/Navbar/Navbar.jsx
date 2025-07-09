import { Link } from "react-router-dom";


const Navbar = ({ onAboutClick, onContentClick, onContactClick, onHelpClick }) => {
  return (
    <div className="sticky top-0 z-50 bg-gray-500 text-white font-semibold shadow-md">
  <div className="flex justify-between items-center px-4 w-auto h-20">
    <div className="logo">
      <div className="logo-icon text-xl md:text-2xl font-bold">📚 Student Connect Nepal</div>
    </div>
    <ul className="list-none flex justify-between items-center">
      <li className="mr-5 hover:text-gray-300 cursor-pointer" onClick={onAboutClick}>About Us</li>
      <li className="mr-5 hover:text-gray-300 cursor-pointer" onClick={onContentClick}>Content</li>
      <li className="mr-5 hover:text-gray-300 cursor-pointer" onClick={onContactClick}>Contact</li>
      <li className="mr-5 hover:text-gray-300 cursor-pointer" onClick={onHelpClick}>Help</li>
      <Link to="/signIn" className="bg-blue-400 hover:text-blue-400 hover:bg-white py-1 px-3 rounded">Sign In</Link>
      <Link to="#" className="bg-blue-400 hover:text-blue-400 hover:bg-white py-1 px-3 rounded">Register</Link>
    </ul>
  </div>
</div>

  );
};

export default Navbar;

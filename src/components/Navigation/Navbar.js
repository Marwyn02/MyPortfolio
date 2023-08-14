import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-black/90 py-2.5">
      <h1 className="text-center text-2xl md:text-3xl text-white font-extrabold italic">
        <NavLink to="/" className="hover:text-red-500/80">
          Marwyn
        </NavLink>
      </h1>
    </div>
  );
};

export default Navbar;

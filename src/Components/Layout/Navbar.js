import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="bg-white relative nav-before">
      <div className="container flex flex-row justify-center md:justify-between items-center py-3 px-5">
        <Logo />
        <nav>
          <div className="flex flex-row gap-2">
            <button type="">
              <NavLink to="/" className="nav-link link">
                Home
              </NavLink>
            </button>
            <button type="">
              <NavLink to="/products" className="nav-link link">
                Products
              </NavLink>
            </button>
            <button type="">
              <NavLink to="/categories" className="nav-link link">
                Categories
              </NavLink>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import Logo from "./Navbar/Logo";
import Menu from "./Navbar/Menu";
import Cart from "./Navbar/Cart";
import User from "./Navbar/User";
import "../components/Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <Logo />
      <div className="navbar-right">
        <Menu />
        <Cart />
        <div>4</div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;

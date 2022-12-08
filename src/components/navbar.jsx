import { DiCodeigniter } from "react-icons/di";
import CartWidget from "./CartWidget";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className="Navbar lg:flex justify-between items-center p-10 ">
      <div className="logo p-6 lg:p-3 flex items-center justify-center">
        <NavLink to="/" className="text-4xl flex items-center justify-center flex-wrap">
          <DiCodeigniter className="leading-none hover:animate-bounce ease-in-out" />
          <h1 className="leading-noner text-center font-black p-4 tracking-tighter">MULTI EQUIP</h1>
        </NavLink>
      </div>
      <div className="navbar-menu p-4">
        <nav className="categorias gap-4 flex flex-wrap items-center justify-center text-sm ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Ver Todo
          </NavLink>
          <NavLink
            to="/category/Equipamos tu comercio"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Equipamos tu comercio
          </NavLink>
          <NavLink
            to="/category/Equipamos tu hogar"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Equipamos tu hogar
          </NavLink>
          <NavLink
            to="/category/Equipamos tu oficina"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Equipamos tu oficina
          </NavLink>

          <CartWidget cartCounter={4} />

        </nav>
      </div>
    </div>
  );
};
export default Navbar;

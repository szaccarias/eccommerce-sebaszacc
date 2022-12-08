import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Cartwidget = ({ cartCounter }) => {
  return (
    <>
      <NavLink to="/checkout"  className="p-8 border-solid border rounded-md shadow-md hover:shadow-lg text-sm hover:border-blue rounded flex justify-center items-center gap-1 ">
        <FaShoppingCart />
        {cartCounter}
      </NavLink>
    </>
  );
};
export default Cartwidget;

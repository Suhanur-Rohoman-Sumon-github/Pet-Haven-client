import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="relative  border mb-4">
      <div className="px-5 lg:px-12 flex  gap-10 items-center  py-5 bg-white ">
        <div className="lg:w-[200px] flex items-center gap-2  px-4 py-2 rounded-md">
          <FaWhatsapp className="text-3xl" />{" "}
          <div>
            Whatsapp: <br /> 01403406419
          </div>
        </div>
        <div className="flex gap-8  ml-[30px] items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#fff] bg-[#f85606] p-2 rounded-md" : "nothing"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-[#fff] bg-[#f85606] p-2 rounded-md" : "nothing"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#fff] bg-[#f85606] p-2 rounded-md" : "nothing"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#fff] bg-[#f85606] p-2 rounded-md" : "nothing"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard/products"
            className={({ isActive }) =>
              isActive ? "text-[#fff] bg-[#f85606] p-2 rounded-md" : "nothing"
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

import { FaBars, FaHome, FaShoppingBag, FaWhatsapp } from 'react-icons/fa';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { CiShop, CiShoppingTag } from 'react-icons/ci';

const BottomNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="relative">
      <div className="px-5 flex justify-between gap-10 items-center  py-5 bg-white">
        <div
          onClick={() => setToggleMenu(!toggleMenu)}
          className="px-5 font-semibold cursor-pointer py-3 flex items-center gap-3 text-xl rounded-md  bg-primary text-white w-fit"
        >
          Shop Categories <FaBars />
        </div>
        <div className="flex-1 flex items-center ">
          <Input
            placeholder="search products"
            className="w-10/12 rounded-e-none py-6"
          />
          <Button className="w-[15%] py-6 bg-primary rounded-s-none">
            Search
          </Button>
        </div>
        <div className="lg:w-[200px] flex items-center gap-2 border px-4 py-2 rounded-md">
          <FaWhatsapp className="text-3xl" />{' '}
          <div>
            Whatsapp: <br /> 01403406419
          </div>
        </div>
      </div>

      <div
        className={` ${
          toggleMenu ? 'block' : 'hidden'
        } w-56 bg-white shadow-md p-5 z-10 rounded-md absolute top-[88px] left-5`}
      >
        <ul className="space-y-4">
          <li className="flex items-center gap-1">
            <FaHome /> Home
          </li>
          <li className="flex items-center gap-1">
            <CiShoppingTag /> Catalog
          </li>
          <li className="flex items-center gap-1">
            <CiShop /> Shop
          </li>
          <li className="flex items-center gap-1">
            {' '}
            <FaShoppingBag />
            Products
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;

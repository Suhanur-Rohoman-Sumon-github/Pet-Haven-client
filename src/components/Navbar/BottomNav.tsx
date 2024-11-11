import { FaBars, FaWhatsapp } from 'react-icons/fa';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const BottomNav = () => {
  return (
    <div className="px-5 flex justify-between gap-10 items-center  py-5 bg-white">
      <div className="px-5  cursor-pointer py-3 flex items-center gap-3 text-xl rounded-md  bg-primary text-white w-fit">
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
  );
};

export default BottomNav;

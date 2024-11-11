import { FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const MiddleNav = () => {
  return (
    <div className="px-5 flex justify-between items-center py-8 text-white">
      <div>
        {/* <Link to="/"> */}
        <h3 className="text-3xl font-semibold">Pet-Haven</h3>
        {/* </Link> */}
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Catalog</li>
          <li>All Collection</li>
          <li>Sale</li>
          <li>Electronics</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <FaUser className="text-xl" /> My Account
        </div>
        <div className="flex items-center gap-2">
          <FaCartShopping className="text-xl" />
          Cart
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;

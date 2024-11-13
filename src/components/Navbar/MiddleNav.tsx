import { FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MiddleNav = () => {
  return (
    <div className="px-5 lg:px-12 flex justify-between items-center bg-primary py-8 text-white">
      <div>
        {/* <Link to="/"> */}
        <h3 className="text-3xl font-semibold">Pet-Haven</h3>
        {/* </Link> */}
      </div>
      <div>
        <ul className="flex gap-10 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Catalog</li>
          <Link to={'/products'}>
            {' '}
            <li>All Collection</li>
          </Link>
          <li>Sale</li>
          <li>Electronics</li>
          <Link to={'/about'}>
            {' '}
            <li>About us </li>
          </Link>
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

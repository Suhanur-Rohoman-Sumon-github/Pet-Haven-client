/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Input } from '../ui/input';
import { useAppSelector } from '../../Redux/hook/hook';
import { useSingleUserQuery } from '../../Redux/features/user/userApis';

const MiddleNav = () => {
  const user = useAppSelector(state => state['pet-haven-auth'].user);
  // @ts-ignore
  const { data: userRes } = useSingleUserQuery(user?.email);
  console.log(userRes);
  return (
    <div className="px-5 lg:px-12 flex justify-between items-center bg-primary py-8 text-white">
      <div>
        {/* <Link to="/"> */}
        <h3 className="text-3xl font-semibold">Pet-Haven</h3>
        {/* </Link> */}
      </div>
      <div className="flex-1  flex items-center mx-24">
        <Input
          placeholder="search products"
          className=" bg-slate-100 rounded-e-none py-5"
        />
        <button className="button-secondary ml-2">Search</button>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          {userRes ? (
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img
                className="w-full h-full"
                src={userRes?.data?.image}
                alt=""
              />
            </div>
          ) : (
            <FaUser className="text-xl" />
          )}{' '}
          My Account
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

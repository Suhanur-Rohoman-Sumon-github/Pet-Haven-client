import { IoMdMailOpen } from 'react-icons/io';
import { Input } from '../ui/input';

const NewsletterSection = () => {
  return (
    <div className="mb-[50px] px-5  lg:px-12 bg-primary h-24 p-5 lg:flex justify-between items-center gap-10">
      <h3 className="flex text-3xl font-semibold text-white items-center gap-2">
        <IoMdMailOpen /> <span>Sign Up for Newsletter</span>
      </h3>
      {/* <div className="lg:w-1/2 flex items-center bg-slate-100 rounded-md  border">
        <input
          placeholder="example@gmail.com"
          className="w-10/12 py-[10px] rounded-s-md px-3 border-none"
        />{' '}
        <button className="w-[17%] ml-0 button-icon rounded-s-none">
          Subscribed
        </button>
      </div> */}
      <div className="lg:w-1/2  flex items-center ">
        <Input
          type="email"
          placeholder="example@gmail.com"
          className=" bg-slate-100 rounded-e-none py-5"
        />
        <button className="button-secondary ml-2">Subscribed</button>
      </div>
    </div>
  );
};

export default NewsletterSection;

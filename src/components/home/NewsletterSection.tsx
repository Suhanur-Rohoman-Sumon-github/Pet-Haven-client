import { IoMdMailOpen } from 'react-icons/io';
import Container from '../Container/Container';

const NewsletterSection = () => {
  return (
    <Container>
      <div className="mb-[100px] bg-primary h-24 rounded-md p-5 lg:flex justify-between items-center gap-10">
        <h3 className="flex text-3xl font-semibold text-white items-center gap-2">
          <IoMdMailOpen /> <span>Sign Up for Newsletter</span>
        </h3>
        <div className="lg:w-1/2 flex items-center bg-slate-100 rounded-md  border">
          <input
            placeholder="example@gmail.com"
            className="w-10/12 py-[10px] rounded-s-md px-3 border-none"
          />{' '}
          <button className="w-[17%] ml-0 button-icon rounded-s-none">
            Subscribed
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NewsletterSection;

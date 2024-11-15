/* eslint-disable @typescript-eslint/ban-ts-comment */
import './Banner.css';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Banner = () => {
  return (
    <Container>
      <div className="min-h-[480px] gap-10 flex justify-center  ">
        <div className="w-1/6 bg-white shadow-md rounded-md p-5">
          <ul className=" space-y-4 text-xs">
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Dog</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Cat</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Bird</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Small Animal</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Reptile</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Fish</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Farm Animal</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Exotic Pet</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products">Wildlife</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products/insects">Insects</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products/amphibians">Amphibians</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products/horses">Horses</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products/rodents">Rodents</Link>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <Link to="/products/arachnids">Arachnids</Link>
            </li>
          </ul>
        </div>
        <div className=" w-[calc(100%-14%)]">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              {' '}
              <img
                className="h-[480px] rounded-md w-full"
                src="/public/banner2.jpeg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img
                className="h-[480px] rounded-md w-full"
                src="https://i.ibb.co.com/X7CHyq6/Orange-and-Yellow-Professional-Gradient-Pet-Fitness-App-Internal-Communication-Website-2.png"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              {' '}
              <img
                className="h-[480px] rounded-md w-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/051/955/242/small_2x/a-dog-sitting-beside-a-large-pile-of-dog-food-looking-curiously-at-the-viewer-photo.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Banner;

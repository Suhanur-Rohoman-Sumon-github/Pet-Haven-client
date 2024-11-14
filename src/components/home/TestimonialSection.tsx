/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Container/Container';
// Import Swiper styles
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const TestimonialSection = () => {
  return (
    <Container>
      <div className=" lg:flex justify-between gap-5 mb-[100px]">
        <div className="w-1/4 border rounded-md p-1">
          <h3 className="px-8 py-3 bg-primary rounded-md text-white font-semibold text-xl">
            Testimonial
          </h3>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" h-auto  p-6 rounded-lg shadow-lg">
                <div className="flex justify-center items-center gap-4">
                  <img
                    className="w-24 h-24 rounded-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJ0B-JHTwEkAixyTpWGN-z_P935SmvtiEqA&s"
                    alt="Profile picture of Jhone"
                  />
                  <div>
                    <h3 className="font-bold text-2xl text-gray-800">Jhone</h3>
                    <p className="text-gray-500">Web Developer</p>
                  </div>
                </div>
                <p className="text-center mt-4 text-gray-700 text-base leading-relaxed">
                  "Since switching to Canine Feast, I love knowing that she’s
                  getting all-natural ingredients that keep her healthy and
                  happy."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-auto  p-6 rounded-lg shadow-lg">
                <div className="flex justify-center items-center gap-4">
                  <img
                    className="w-24 h-24 rounded-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJ0B-JHTwEkAixyTpWGN-z_P935SmvtiEqA&s"
                    alt="Profile picture of Jhone"
                  />
                  <div>
                    <h3 className="font-bold text-2xl text-gray-800">Jhone</h3>
                    <p className="text-gray-500">Web Developer</p>
                  </div>
                </div>
                <p className="text-center mt-4 text-gray-700 text-base leading-relaxed">
                  "Since switching to Canine Feast, I love knowing that she’s
                  getting all-natural ingredients that keep her healthy and
                  happy."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-auto  p-6 rounded-lg shadow-lg">
                <div className="flex justify-center items-center gap-4">
                  <img
                    className="w-24 h-24 rounded-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJ0B-JHTwEkAixyTpWGN-z_P935SmvtiEqA&s"
                    alt="Profile picture of Jhone"
                  />
                  <div>
                    <h3 className="font-bold text-2xl text-gray-800">Jhone</h3>
                    <p className="text-gray-500">Web Developer</p>
                  </div>
                </div>
                <p className="text-center mt-4 text-gray-700 text-base leading-relaxed">
                  "Since switching to Canine Feast, I love knowing that she’s
                  getting all-natural ingredients that keep her healthy and
                  happy."
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className="w-full flex-1 rounded-md h-[340px] bg-cover bg-center "
          style={{
            backgroundImage: `url(https://t3.ftcdn.net/jpg/08/58/52/74/360_F_858527478_ujWghSsTUe68rbqpOHuBeR05eiFSJIs7.jpg)`,
          }}
        >
          <div className=" space-y-4 text-center  w-full h-full flex flex-col justify-center items-center text-white p-4 bg-black/20 ">
            <p>Get up to 70% off this Food </p>
            <h3 className="text-3xl font-semibold">Crunchy Critter Chow</h3>
            <button className="button-secondary">Shop Now</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialSection;

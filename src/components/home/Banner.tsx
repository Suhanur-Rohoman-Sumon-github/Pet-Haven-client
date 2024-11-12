/* eslint-disable @typescript-eslint/ban-ts-comment */
import CarosoulCard from "../Carosoul/CarosoulCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <CarosoulCard
            img="https://i.ibb.co.com/gT09Pkb/Orange-and-Yellow-Professional-Gradient-Pet-Fitness-App-Internal-Communication-Website-1.png"
            title="Explore New Horizons"
            text="Discover the world beyond your comfort zone. Embark on adventures that broaden your perspective and inspire personal growth."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarosoulCard
            img="https://img.freepik.com/free-photo/pet-accessories-still-life-concept-with-pet-dry-food_23-2148949564.jpg"
            title="Mastering the Art of Productivity"
            text="Unlock your potential with proven techniques and strategies to boost productivity, stay focused, and achieve your goals."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarosoulCard
            img="https://www.patipets.com.au/cdn/shop/articles/What_To_Buy_New_Puppies_880x.png?v=1722391848"
            title="A Journey Through Tech Innovations"
            text="Dive into the latest technological advancements shaping our future, from AI breakthroughs to sustainable energy solutions."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarosoulCard
            img="https://img.freepik.com/premium-photo/dry-food-with-pets-accessories_51665-794.jpg"
            title="The Power of Mindful Living"
            text="Embrace a lifestyle that prioritizes well-being. Learn how mindfulness practices can enhance happiness, reduce stress, and improve overall health."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

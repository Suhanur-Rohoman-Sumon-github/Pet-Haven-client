import Banner from "../../../components/home/Banner";
import BestSellingCollection from "../../../components/home/BestSellingCollection";
import CategorySection from "../../../components/home/CategorySection";
import CollectionSection from "../../../components/home/CollectionSection";
import FeatureSection from "../../../components/home/FeatureSection";
import TestimonialSection from "../../../components/home/TestimonialSection";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mt-8">
        <FeatureSection />
      </div>
      <CollectionSection />
      <BestSellingCollection />
      <CategorySection />
      <TestimonialSection />
    </>
  );
};

export default Home;

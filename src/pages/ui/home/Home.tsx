import Banner from "../../../components/home/Banner";
import BestSellingCollection from "../../../components/home/BestSellingCollection";
import BlogSection from "../../../components/home/BlogSection";
import CategorySection from "../../../components/home/CategorySection";
import CollectionSection from "../../../components/home/CollectionSection";
import FeatureSection from "../../../components/home/FeatureSection";
import TestimonialSection from "../../../components/home/TestimonialSection";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="my-8">
        <FeatureSection />
      </div>
      <CategorySection />
      <CollectionSection />
      <BestSellingCollection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default Home;

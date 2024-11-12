import Banner from '../../../components/home/Banner';
import BestSellingCollection from '../../../components/home/BestSellingCollection';
import CategorySection from '../../../components/home/CategorySection';
import CollectionSection from '../../../components/home/CollectionSection';
import TestimonialSection from '../../../components/home/TestimonialSection';

const Home = () => {
  return (
    <>
      <Banner />
      <CategorySection />
      <CollectionSection />
      <BestSellingCollection />
      <TestimonialSection />
    </>
  );
};

export default Home;

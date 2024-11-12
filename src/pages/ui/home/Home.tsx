import Banner from '../../../components/home/Banner';
import BestSellingCollection from '../../../components/home/BestSellingCollection';
import BlogSection from '../../../components/home/BlogSection';
import CategorySection from '../../../components/home/CategorySection';
import CollectionSection from '../../../components/home/CollectionSection';
import NewsletterSection from '../../../components/home/NewsletterSection';
import TestimonialSection from '../../../components/home/TestimonialSection';

const Home = () => {
  return (
    <>
      <Banner />
      <CategorySection />
      <CollectionSection />
      <BestSellingCollection />
      <TestimonialSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
};

export default Home;

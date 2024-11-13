import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import FeatureSection from '../../../components/home/FeatureSection';
import NewsletterSection from '../../../components/home/NewsletterSection';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa';
import { GiCheckedShield } from 'react-icons/gi';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import { FaMeta } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <NewsletterSection />
      <FeatureSection />
      <Container>
        {' '}
        <hr />
        <footer className=" py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Footer Logo and Description */}
            <div className="space-y-3">
              <h3 className="text-3xl font-semibold">Pet Haven</h3>
              <p>
                Claritas Processus Dynamicus Sequitu Consution Claritas
                Processus.
              </p>
              <div className="flex gap-4 mt-4">
                <GiCheckedShield className="text-4xl" />
                <RiVerifiedBadgeLine className="text-4xl" />
                <FaMeta className="text-4xl" />
              </div>
            </div>

            {/* Products Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/products"
                    className="hover:text-primary transition"
                  >
                    Best Seller
                  </Link>
                </li>
                <li>
                  <Link
                    to="/featured-products"
                    className="hover:text-primary transition"
                  >
                    Featured Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className="hover:text-primary transition"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-products"
                    className="hover:text-primary transition"
                  >
                    New Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sale-products"
                    className="hover:text-primary transition"
                  >
                    Sale Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Company Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/search" className="hover:text-primary transition">
                    Search
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/delivery"
                    className="hover:text-primary transition"
                  >
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/catalog" className="hover:text-primary transition">
                    Catalog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Store Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Store Information</h3>
              <ul className="space-y-2 ">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-xl" />
                  My Company, 42 Puffin street, 12345 Puffinville, France
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-xl" />
                  <span>Phone: 0123-456-789</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-xl" />
                  <a
                    href="mailto:sales@company.com"
                    className="hover:text-primary transition"
                  >
                    sales@company.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Container>
      <div className="h-12 flex justify-between px-5  lg:px-12 items-center bg-primary">
        <div className="text-sm text-white">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex text-white space-x-6">
          <a href="https://facebook.com">
            <FaFacebook className="text-xl" />
          </a>
          <a href="https://twitter.com">
            <FaTwitter className="text-xl" />
          </a>
          <a href="https://instagram.com">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

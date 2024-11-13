import './Banner.css';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
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
          <img
            className="h-[480px] rounded-md w-full"
            src="https://i.ibb.co.com/gT09Pkb/Orange-and-Yellow-Professional-Gradient-Pet-Fitness-App-Internal-Communication-Website-1.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;

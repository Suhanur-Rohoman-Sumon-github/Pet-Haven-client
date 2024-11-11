import MiddleNav from '../../../components/Navbar/MiddleNav';
import TopNav from '../../../components/Navbar/TopNav';

const Navbar = () => {
  return (
    <nav className="bg-primary container">
      <TopNav />
      <MiddleNav />
    </nav>
  );
};

export default Navbar;

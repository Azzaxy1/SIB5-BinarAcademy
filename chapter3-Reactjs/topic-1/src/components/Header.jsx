import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link className="Link" to="/">
        Home
      </Link>
      <Link className="Link" to="/checkApp">
        App
      </Link>
    </nav>
  );
};

export default Header;

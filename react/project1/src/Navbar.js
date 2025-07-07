import { Link } from 'react-router-dom';
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div className="links">
        {/* <a href="/" id="s1">Home</a>
        <a  href="/about" id="s1">About</a>
        <a  href="/create" id="s1">Skills</a>
        <a  href="/create" id="s1">Projects && Certifications</a>
        <a  href="/create" id="s1">Contact</a> */}
        <Link to="/" id="s1">Home</Link>
        <Link to="/create" id="s1">About</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;

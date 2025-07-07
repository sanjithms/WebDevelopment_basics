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
        <Link to="/home" id="s1">Home</Link>
        <Link to="/about" id="s1">About</Link>
        <Link to="/skills" id="s1">Skills</Link>
        <Link to="/projects" id="s1">Projects & Certifications</Link>
        <Link to="/contact" id="s1">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

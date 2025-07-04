
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a 
          href="/create" 
          style={{
            color: "green",
            backgroundColor: "burlywood",
            borderRadius: '5px',
            margin: '10px',
            padding: '10px'
          }}
        >
          New blog
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

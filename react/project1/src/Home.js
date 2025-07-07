import { useState, useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {
  const [name, setName] = useState('Sanjith');
  const [age, setAge] = useState(20);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [ispending, setisPending] = useState(true);

  useEffect(() => {
    fetch('/blogs.json')
      .then(res => {
        if (!res.ok) {
          throw Error('Failed to fetch data');
        }
        return res.json();
      })
      .then(data => {
        setTimeout(() => {
          setBlogs(data);
          setisPending(false);
          setError(null);
        }, 2000);
      })
      .catch(err => {
        setTimeout(()=>{
          setisPending(false);
        setError("Custom Error: Blog data could not be loaded. Please try again later.");
        },1000);
      });
  }, []);

  const handleClick = () => {
    setName('Sanjith MS');
    setAge(21);
    if (blogs) {
      setBlogs(blogs.map(b1 =>
        b1.id === 104 ? { ...b1, origin: 2003 } : b1
      ));
    }
  };

  const handleDelete = (id) => {
    if (blogs) {
      const newBlogs = blogs.filter(b => b.id !== id);
      setBlogs(newBlogs);
    }
  };

  return (
    <div>
      <h1 id="h1">Home Page</h1>
      <p>Name is {name} and {age} Years old</p>

      <button
        onClick={handleClick}
        style={{ margin: '10px', padding: '5px 10px' }}
      >
        Click Me
      </button>

      {ispending && <div><h1>Loading...</h1></div>}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {blogs && <BlogList b={blogs} title="All Blogs" ha={handleDelete} />}
    </div>
  );
};

export default Home;

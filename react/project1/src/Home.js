import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
  const [name, setName] = useState('Sanjith');
  const [age, setAge] = useState(20);
  const [blogs, setBlogs] = useState([
    { title: "Microsoft", body: "bkjdbvsiuvhadsv wiuhejbewhjbjhwbjh", origin: 1974, id: 101 },
    { title: "Google", body: "fewfiuewgfkewjbgfkewgfrwjlgrwahbgw", origin: 1990, id: 102 },
    { title: "Amazon", body: "edngowighriubgwirhgrjebgrugrgbrgrbgr", origin: 2000, id: 103 },
    { title: "Apple", body: "ekfnwehgfowbgoiwjrgjbs;gsjkgnsjbgsgbjs", origin: 2002, id: 104 }
  ]);

  const handleClick = () => {
    setName('Sanjith MS');
    setAge(21);
    setBlogs(blogs.map(b1 => 
    b1.id === 104 ? { ...b1, origin: 2003 } : b1
  ));
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

      <BlogList b={blogs}  title ="All Blogs "/>
      <BlogList b={blogs.filter(bi=>bi.origin === 2000)} /> 
    </div>
  );
};

export default Home;

import React from 'react';

// const BlogList = ({b}) => { 
//        OR
const BlogList = (props) => {
  const b=props.b;
  const title=props.title;
  console.log(title);
  console.log(b);
  
  return (
    <div className="blog-list">
      {b.map(b2 => (
        <div className="blog_preview" key={b2.id}>
          <h3>{b2.title}</h3>
          <p>{b2.body}</p>
          <p><strong>{b2.origin}</strong></p>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

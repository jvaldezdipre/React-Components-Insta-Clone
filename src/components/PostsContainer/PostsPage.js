//Complete the necessary code in this file
// import useState
import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';
// import data
import userData from '../../dummy-data';

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(userData);

  return (
    <div className='posts-container-wrapper'>
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map((data, index) => {
        return <Post key={index} post={data} />;
      })}
    </div>
  );
};

export default PostsPage;

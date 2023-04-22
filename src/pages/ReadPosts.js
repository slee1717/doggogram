import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './ReadPosts.css'

const ReadPosts = (props) => {
  const [posts, setPosts] = useState(props.data);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setPosts(props.data);
  }, [props]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ReadPosts">
    
    <div style={{textAlign: 'center'}}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          style={{width: '200%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'}}
        />
      </div>
      <br />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => (
          <Card
            key={post.id}
            id={post.id}
            name={post.name}
            picture={post.picture}
            post={post.post}
          />
        ))
      ) : (
        <h2>No Challenges Yet 😞</h2>
      )}
    </div>
  );
};

export default ReadPosts;
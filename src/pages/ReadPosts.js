import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './ReadPosts.css'

const ReadPosts = (props) => {
  const [posts, setPosts] = useState(props.data);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setPosts(props.data);
  }, [props]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = () => {
    const sortedPosts = [...posts];
    sortedPosts.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setPosts(sortedPosts);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

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
        <br />
        <br />
        <div style={{textAlign: 'left'}}>
        <button onClick={handleSort}>
          {sortOrder === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
        </button>
        </div>
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
            created_at={post.created_at}
          />
        ))
      ) : (
        <h2>No Challenges Yet 😞</h2>
      )}
    </div>
  );
};

export default ReadPosts;
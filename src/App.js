import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import { supabase } from './client'


const App = () => {

  const [posts, setPosts] = useState([]); // Add state for posts

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  useEffect(() => {
    // Define async function fetchData
    const fetchData = async () => {
      const { data } = await supabase
        .from('socialmedia')
        .select()
        .order('created_at', { ascending: true });
      setPosts(data);
    }

    fetchData(); // Call fetchData on component mount

  }, []); // Empty dependency array to ensure it only runs on mount

  return ( 

    <div className="App">

      <div className="header">
        <h1>DoggoGram 🐕</h1>
        <Link to="/"><button className="headerBtn"> View All Posts   </button></Link>
        <Link to="/new"><button className="headerBtn"> Add New Post </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;

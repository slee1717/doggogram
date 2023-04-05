import React, { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client'

const CreatePost = () => {
    const [post, setPost] = useState({
        title: '',
        author: '',
        description: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .insert({ title: post.title, author: post.author, description: post.description });

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost;
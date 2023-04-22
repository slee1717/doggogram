import React, { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client'

const CreatePost = () => {
    const [post, setPost] = useState({
        name: '',
        post: '',
        picture: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('socialmedia')
            .insert({ name: post.name, post: post.post, picture: post.picture });

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="post">post</label><br />
                <input type="text" id="post" name="post" value={post.post} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="picture">picture</label><br />
                <textarea rows="5" cols="50" id="picture" name="picture" value={post.picture} onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost;
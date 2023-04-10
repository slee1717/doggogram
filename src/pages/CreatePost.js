import React, { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client'

const CreatePost = () => {
    const [post, setPost] = useState({
        name: '',
        color: '',
        speed: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .insert({ name: post.name, color: post.color, speed: post.speed });

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">color</label><br />
                <input type="text" id="color" name="color" value={post.color} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="speed">speed</label><br />
                <textarea rows="5" cols="50" id="speed" name="speed" value={post.speed} onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost;
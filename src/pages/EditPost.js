import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'; // assuming you have imported and configured supabaseClient

const EditPost = ({ data }) => {

    const { id } = useParams();
    const [post, setPost] = useState({ name: '', color: '', speed: '' });

    useEffect(() => {
        const fetchPost = async () => {
            const { data: postFromDB, error } = await supabase
                .from('crewmate')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post:', error);
            } else {
                setPost(postFromDB);
            }
        };

        fetchPost();
    }, [id]);

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .delete()
            .eq('id', id);

        window.location = "http://localhost:3000/";
    }

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('crewmate')
        .update({ name: post.name, color: post.color,  speed: post.speed})
        .eq('id', id);

        window.location = "/";
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prevPost => ({ ...prevPost, [name]: value }));
    }

    return (
        <div>
            <form>
                <label htmlFor="name">name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br />

                <label htmlFor="color">color</label><br />
                <input type="text" id="color" name="color" value={post.color} onChange={handleChange} /><br />
                <br />

                <label htmlFor="speed">speed</label><br />
                <textarea rows="5" cols="50" id="speed" name="speed" value={post.speed} onChange={handleChange} >
                </textarea>
                <br />
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'; // assuming you have imported and configured supabaseClient

const EditPost = ({ data }) => {

    const { id } = useParams();
    const [post, setPost] = useState({ name: '', post: '', picture: '' });

    useEffect(() => {
        const fetchPost = async () => {
            const { data: postFromDB, error } = await supabase
                .from('socialmedia')
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
            .from('socialmedia')
            .delete()
            .eq('id', id);

        window.location = "http://localhost:3000/";
    }

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('socialmedia')
        .update({ name: post.name, post: post.post,  picture: post.picture})
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

                <label htmlFor="post">post</label><br />
                <input type="text" id="post" name="post" value={post.post} onChange={handleChange} /><br />
                <br />

                <label htmlFor="picture">picture</label><br />
                <textarea rows="5" cols="50" id="picture" name="picture" value={post.picture} onChange={handleChange} >
                </textarea>
                <br />
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;
import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'; // assuming you have imported and configured supabaseClient

const EditPost = ({data}) => {

    const {id} = useParams();
    const post = data.filter(item => item.id === id)[0];

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        window.location = "http://localhost:3000/";
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={post.description} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;
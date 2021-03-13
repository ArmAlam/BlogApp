import React from 'react';
import PostForm from "./PostForm";

const AddPost = ({addPost}) => {
    return (
        <PostForm addPost={addPost}/>
    );
}


export default AddPost;
import React from 'react';
import PostForm from "./PostForm";

const EditPost = ({editPost, updatePost, selectedPost}) => {
    return (
        <>
            <PostForm
                editPost={editPost}
                updatePost={updatePost}
                selectedPost={selectedPost}
            />
        </>
    );
}


export default EditPost;
import React from 'react';
import {Paper} from "@material-ui/core";
import PostSummary from "./PostSummary";

const Posts = ({posts}) => {
    return (
        <>
            {posts.map(post => (
                <Paper elevation={4} key={post.id}>
                    <PostSummary post={post} />
                </Paper>
            ))}
        </>
    );
}


export default Posts;
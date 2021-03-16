import React from 'react';
import {Paper, withStyles} from "@material-ui/core";
import PostSummary from "./PostSummary";
import styles from "./styles";

const Posts = ({posts, classes}) => {
    return (
        <>
            {posts.map(post => (
                <Paper className={classes.post} elevation={4} key={post.id}>
                    <PostSummary post={post} />
                </Paper>
            ))}
        </>
    );
}


export default withStyles(styles)(Posts);
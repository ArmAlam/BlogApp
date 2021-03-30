import React from 'react';
import {Paper, withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {compose} from "redux";
import PostSummary from "./PostSummary";
import styles from "./styles";

const Posts = ({classes, posts}) => {
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}



export default compose(
    connect(mapStateToProps),
    (withStyles(styles)
    ))(Posts);
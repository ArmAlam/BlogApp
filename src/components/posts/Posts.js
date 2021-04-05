import React from 'react';
import {Paper, withStyles} from "@material-ui/core";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {useFirestoreConnect} from "react-redux-firebase";
import PostSummary from "./PostSummary";
import Spinner from "../common/Spinner";
import styles from "./styles";

const Posts = ({classes}) => {
    useFirestoreConnect([
        { collection: 'posts'}
    ]);

    const posts = useSelector(({firestore: {ordered}}) => ordered.posts && ordered.posts);

    return (
        <>
            {posts ? posts.map(post => (
                <Paper className={classes.post} elevation={4} key={post.id}>
                    <PostSummary post={post} />
                </Paper>
            ))
                :
                <Spinner/>
            }
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
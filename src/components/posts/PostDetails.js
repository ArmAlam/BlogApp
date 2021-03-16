import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Typography, Button, withStyles} from "@material-ui/core";
import {parseHtml} from "../../utils";
import styles from "./styles";

const PostDetails = ({
        posts,
        match: {params: {id}},
        history,
        editPost,
        deletePost,
        classes
    }) => {
    const findPost = posts.find(post => post.id === id);

    const handleEdit = (id) => {
        editPost(id);
    }

    const handleDelete = (id) => {
        deletePost(id);
        history.push('/');
    };
    return (
        <div className={classes.postDetails}>
            <Typography variant='h5' component='h3'>
                {findPost.title}
            </Typography>
            <img src={`/img/${findPost.img_url}`} className={classes.image} alter='Blog Image' />
            <Typography variant='body2' dangerouslySetInnerHTML={parseHtml(findPost.body)}>
            </Typography>
            <Typography
                className={classes.categories}
                variant='caption'
                display='block'
                align='left'>
                Categories: {findPost.categories.join(',')}
            </Typography>
            <Typography variant='caption' display='block' align='right'>
                Written by: <span className={classes.author}>Arm</span> on 23 February.
            </Typography>
            <Button
                className={classes.detailsBtn}
                component={Link}
                to={`/edit/${findPost.id}`}
                variant='contained'
                color='primary'
                onClick={() => handleEdit(findPost.id)}
            >
                Edit
            </Button>
            <Button
                className={classes.detailsBtn}
                variant='contained'
                color='primary'
                onClick={() => handleDelete(findPost.id)}
            >
                Delete
            </Button>
        </div>
    );
}


export default withStyles(styles)(withRouter(PostDetails));
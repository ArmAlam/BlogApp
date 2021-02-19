import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Typography, Button} from "@material-ui/core";

const PostDetails = ({
        posts,
        match: {params: {id}},
        history,
        deletePost
    }) => {
    const findPost = posts.find(post => post.id === Number(id));

    const handleDelete = (id) => {
        deletePost(id);
        history.push('/');
    };
    return (
        <>
            <Typography variant='h5' component='h3'>
                {findPost.title}
            </Typography>
            <img src={`/img/${findPost.img_url}`} alter='Blog Image' />
            <Typography variant='body2'>
                {findPost.body}
            </Typography>
            <Typography variant='caption' display='block' align='right'>
                Written by: Arm
            </Typography>
            <Button
                component={Link}
                to={`/edit/${findPost.id}`}
                variant='contained'
                color='primary'
            >
                Edit
            </Button>
            <Button
                variant='contained'
                color='primary'
                onClick={() => handleDelete(findPost.id)}
            >
                Delete
            </Button>
        </>
    );
}


export default withRouter(PostDetails);
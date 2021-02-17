import React from 'react';
import {withRouter} from 'react-router-dom';
import {Typography, Button} from "@material-ui/core";

const PostDetails = ({posts, match: {params: {id}}}) => {
    const findPost = posts.find(post => post.id === Number(id));
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
            <Button variant='contained' color='primary' >
                Edit
            </Button>
            <Button variant='contained' color='primary' >
                Delete
            </Button>
        </>
    );
}


export default withRouter(PostDetails);
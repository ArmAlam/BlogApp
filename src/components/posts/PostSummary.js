import React from 'react';
import {Typography, Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {truncateText, parseHtml} from '../../utils';

const PostSummary = ({post}) => {
    return (
        <>
            <Typography variant='h5' component='h3'>
                {post.title}
            </Typography>
            <Typography variant='body2' dangerouslySetInnerHTML={ parseHtml( truncateText(post.body, 50))}>
            </Typography>
            <Button
                component={Link}
                to={`/post/${post.id}`}
                variant='contained'
                color='primary'>
                Read More
            </Button>
        </>
    );
}


export default PostSummary;
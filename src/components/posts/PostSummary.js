import React from 'react';
import {Typography, Button, withStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {truncateText, parseHtml} from '../../utils';
import styles from "./styles";

const PostSummary = ({post, classes }) => {
    return (
        <>
            <Typography variant='h5' component='h3'>
                {post.title}
            </Typography>
            <Typography variant='body2' dangerouslySetInnerHTML={ parseHtml( truncateText(post.body, 50))}>
            </Typography>
            <Button
                className={classes.button}
                component={Link}
                to={`/post/${post.id}`}
                variant='contained'
                color='primary'>
                Read More
            </Button>
        </>
    );
}


export default withStyles(styles)(PostSummary);
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'; // useSelector hook ===> retrieves state from store,,,, useDispatch ===> dispatch action
import {Typography, Button, withStyles} from "@material-ui/core";
import {parseHtml} from "../../utils";
import styles from "./styles";
import {deletePost} from '../../store'

const PostDetails = ({
        match: {params: {id}},
        history,
        classes,
    }) => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const findPost = posts.find(post => post.id === id);

    const handleDelete = (id) => {
        dispatch(deletePost(id));
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

/**
 * used for connect of redux
 */

// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deletePost: (id) => dispatch(deletePost(id))
//     };
// }


export default withStyles(styles)(PostDetails);
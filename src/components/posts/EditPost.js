import React from 'react';
import {useSelector} from 'react-redux';
import {compose} from "redux";
import PostForm from "./PostForm";

const EditPost =
    ({
        match: {
            params: {id}
        }
    }) => {

    const post = useSelector(state => state.posts.find(post => post.id === id));

    return (
        <>
            <PostForm
                selectedPost={post}
            />
        </>
    );
}


/**
 * Used for connect of react-redux
 */
// const mapStateToProps = (state, ownProps) => {
//     const post = state.posts.find(post => post.id === ownProps.match.params.id);
//
//     return {
//         post
//     };
// }

export default EditPost;

// export default compose(
//     connect(mapStateToProps,)
// )(EditPost);
const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    };
};

const updatePost = (post, id) => {

    return {
        type: 'UPDATE_POST',
        post,
        id
    }
}

const deletePost = (id) => {

    return {
        type: 'DELETE_POST',
        id
    }
}

export {addPost, updatePost, deletePost};
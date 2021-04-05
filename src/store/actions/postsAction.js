const addPost = (post) => {
    return async (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        //store data in firebase firestore
        try {
            await firestore.add({collection: 'posts'}, {...post, createdAt: new Date() });
            dispatch({
                type: 'ADD_POST_SUCCESS',
            })
        } catch (err) {
            dispatch({
                type: 'ADD_POST_ERROR',
                err,
            })
        }
    }


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
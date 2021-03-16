import {useState} from 'react';


const usePostHook = (initialData = []) => {
    const [posts, setPosts] = useState(initialData);
    return {                                // returning an object
        posts,
        addPosts(post) {
            setPosts([...posts, post]);
        },
        deletePost(id){
            setPosts(posts.filter(post => post.id !== id));
        },
        updatePost(postToUpdate){
            // solve problem of updating
            const postUpdate = posts.map(post =>
                post.id === postToUpdate.id ? (post = postToUpdate) : post
            );

            setPosts(postUpdate);
        }
    }
}

export default usePostHook;
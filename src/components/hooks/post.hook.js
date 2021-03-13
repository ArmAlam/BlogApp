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
        updatePost(){

        }
    }
}

export default usePostHook;
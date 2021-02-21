import {useState} from 'react';


const usePostHook = (initialData = []) => {
    const [posts, setPosts] = useState(initialData);
    return {                                // returning an object
        posts,
        addPosts() {

        },
        deletePost(id){
            setPosts(posts.filter(post => post.id !== id));
        },
        updatePost(){

        }
    }
}

export default usePostHook;
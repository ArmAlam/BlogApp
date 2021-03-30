import {createStore, combineReducers} from "redux";
import postReducers from "./reducers/postsReducer";
import {addPost, updatePost, deletePost} from "./actions/postsAction";

const store = createStore(combineReducers({
    posts: postReducers
}));

export {store, addPost, updatePost, deletePost};
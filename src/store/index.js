import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {firebaseReducer, getFirebase} from 'react-redux-firebase';
import {firestoreReducer, getFirestore, reduxFirestore} from 'redux-firestore';
import postReducers from "./reducers/postsReducer";
import {addPost, updatePost, deletePost} from "./actions/postsAction";
import {firebase} from  '../firebase/fbconfig';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    posts: postReducers,
    firebase: firebaseReducer,
    firestore: firestoreReducer
}),
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({
        getFirebase,
        getFirestore
    })
    ),
        reduxFirestore(firebase)
    ) // place multiple store enhancers
);

export {store, addPost, updatePost, deletePost};
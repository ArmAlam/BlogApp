import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {createFirestoreInstance} from 'redux-firestore';
import {store} from "./store";
import App from './App';
import './index.css';
import { firebase, rrfConfig} from "./firebase/fbconfig";

// react redux firebase props
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider> ,
    document.getElementById('root')
);


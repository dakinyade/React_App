import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from 'redux' //applyMiddleWare is regarded as a store enhancer; it enhances the store with extra
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux' // the binding layer helps bind react to store
import thunk from 'redux-thunk' //Redux thunk is a middleware and is used to make halt operations, so you can make some async operations
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import fbConfig from './firebase/fbConfig'
import firebase from 'firebase/app'
//Redux thunk is used to make halt operations, so you can make some async operations
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
        reduxFirestore(firebase, fbConfig)
    )
);

const profileSpecificProps = {
    useFirestoreForProfile: true,
    userProfile: 'users', // where profiles are stored in database,
    enableRedirectHandling: false,
    resetBeforeLogin: false
};

const rrfProps = {
    firebase,
    config: fbConfig,
    config: profileSpecificProps,
    dispatch: store.dispatch,
    createFirestoreInstance
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
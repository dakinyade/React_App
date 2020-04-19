import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import {combineReducers} from 'redux'   //to combine multiple reducers into one to give one root reduce
// this is a pre-made reducer, which is responsible for syncing our firestore data with the state data in the background
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase"; // a reducer that can be used to access the authentication in firebase

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer
//Reducers are objects used to manipulate with stores. you dont have to edit the stores directly.

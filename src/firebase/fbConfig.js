import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAVn9rXG8o4rs-z0baFilywBMFwduLm4Xg",
    authDomain: "vue-blog-ccf0b.firebaseapp.com",
    databaseURL: "https://vue-blog-ccf0b.firebaseio.com",
    projectId: "vue-blog-ccf0b",
    storageBucket: "vue-blog-ccf0b.appspot.com",
    messagingSenderId: "1062799800755",
    appId: "1:1062799800755:web:bda7b3095f0bb2da1473c6",
    measurementId: "G-J37M71NWJ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({timestampsInSnapshots: false})
//firebase.analytics();

export default firebase;
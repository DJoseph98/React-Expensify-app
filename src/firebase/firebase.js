import firebase from 'firebase/app';  //permet de créer l'objet firebase et d'avoir accées à toute les fonctions
import 'firebase/database';
import 'firebase/auth';

//set config for firebase using env variables
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database(); 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // google provider pour se connecter
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider(); // facebook provider pour se connecter

export { firebase, googleAuthProvider, facebookAuthProvider, database as default };
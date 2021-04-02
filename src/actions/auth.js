import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLoginByEmail = () => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}

export const startCreateNewUserByEmail = ({ email, password }) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
}

export const startLoginGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider); //retourne la popup de connexion google en utilisant le provide créer
    };
};

export const startLoginFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider); //retourne la popup de connexion facebook en utilisant le provide créer
    };
};


export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}
import Swal from 'sweetalert2'
import { firebase, googleAutProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { startLoading, finishLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                const { displayName, uid } = user;
                dispatch(login(uid, displayName));
                dispatch(finishLoading());
            })
            .catch(err => {
                console.log(err);
                dispatch(finishLoading());
                Swal.fire('Error', err.message, 'error');
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                const { displayName, uid } = user;
                dispatch(login(uid, displayName));
            })
            .catch(err => {
                console.log(err);
                Swal.fire('Error', err.message, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAutProvider)
            .then(({ user }) => {
                const { displayName, uid } = user;
                dispatch(login(uid, displayName));
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logut());
    }
}

export const logut = () => ({
    type: types.logout
});
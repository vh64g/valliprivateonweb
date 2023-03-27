import { auth } from './firebase.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';

function register(){
    let email = document.getElementById('regE').value.toString()
    let pw = document.getElementById('regP').value.toString()
    createUserWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

function login(){
    let email = document.getElementById('logE').value.toString()
    let pw = document.getElementById('logP').value.toString()
    signInWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

document.querySelector('#regB').addEventListener('click', register);
document.querySelector('#logB').addEventListener('click', login);
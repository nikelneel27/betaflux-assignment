import firebase from "firebase/app";
import "firebase/auth"


const firebaseConfig = {
    apiKey: 'AIzaSyDZanyVOngQgPC6rLp92s3Xsw0nfKJm_2g',
    authDomain: 'betaflux-assignment.firebaseapp.com',
    projectId: 'betaflux-assignment',
    storageBucket: 'betaflux-assignment.appspot.com',
    messagingSenderId: 55485389249,
    databaseURL: 'https://betaflux-assignment-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };


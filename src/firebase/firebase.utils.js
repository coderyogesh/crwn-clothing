import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDhF5xV2eqYuFgXOdvfIWG1F5GbY6Msrp0",
        authDomain: "crwn-db-34d91.firebaseapp.com",
        projectId: "crwn-db-34d91",
        storageBucket: "crwn-db-34d91.appspot.com",
        messagingSenderId: "334846134749",
        appId: "1:334846134749:web:28b5a9158614ce8b630e34",
        measurementId: "G-ZPTC2WDWN2"
      };

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
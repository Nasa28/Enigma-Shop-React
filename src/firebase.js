import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBplXfqpS79z58hhmivtb5IlPfOOZ_VPd4',
  authDomain: 'shop-fb38c.firebaseapp.com',
  projectId: 'shop-fb38c',
  storageBucket: 'shop-fb38c.appspot.com',
  messagingSenderId: '783731957424',
  appId: '1:783731957424:web:e3d4c48a191260ac28e575',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleauthProvider = new firebase.auth.GoogleAuthProvider();

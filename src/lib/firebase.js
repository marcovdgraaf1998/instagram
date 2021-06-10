import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJpXXQZoKg9YcaQHcP-axKsWgalJr3TaI",
    authDomain: "instagram-22152.firebaseapp.com",
    projectId: "instagram-22152",
    storageBucket: "instagram-22152.appspot.com",
    messagingSenderId: "399485801997",
    appId: "1:399485801997:web:2d74e1457d1bef63d8a744",
    measurementId: "G-J37M4111VK"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue }
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZgZUh70PLaFZLPGCFPSo1gGieSkKhUQE",
    authDomain: "proyecto-de-grado-a7460.firebaseapp.com",
    databaseURL: "https://proyecto-de-grado-a7460-default-rtdb.firebaseio.com",
    projectId: "proyecto-de-grado-a7460",
    storageBucket: "proyecto-de-grado-a7460.appspot.com",
    messagingSenderId: "180524503318",
    appId: "1:180524503318:web:d34298ec8585cd1c1c4037",
    measurementId: "G-YQ7YBEPGCG"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

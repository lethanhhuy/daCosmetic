import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAiOZLPRwnefmLKiTgwvsqjg-M9iRY1jPg",
    authDomain: "dacosmetic-bda4e.firebaseapp.com",
    databaseURL: "https://dacosmetic-bda4e.firebaseio.com",
    projectId: "dacosmetic-bda4e",
    storageBucket: "dacosmetic-bda4e.appspot.com",
    messagingSenderId: "414120063928"
};
firebase.initializeApp(config);

export default firebase;
import "firebase/firestore";
import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyBcOqa9PCoW7b2l_jWAgRn2U5828APnw7A",
    authDomain: "testhaha-74f80.firebaseapp.com",
    projectId: "testhaha-74f80",
    storageBucket: "testhaha-74f80.appspot.com",
    messagingSenderId: "605095976234",
    appId: "1:605095976234:web:a6cd9547579997a9d61253",
    measurementId: "G-W7FBS90MN3"
};

firebase.initializeApp(firebaseConfig);

export {firebase}
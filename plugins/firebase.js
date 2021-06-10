import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
  apiKey: "AIzaSyCkV7Eo9f9Qsierc07_yjXD_tWYVeK9SKI",
  authDomain: "shop-review-app-eaa55.firebaseapp.com",
  projectId: "shop-review-app-eaa55",
  storageBucket: "shop-review-app-eaa55.appspot.com",
  messagingSenderId: "978963790149",
  appId: "1:978963790149:web:4e562afe279178e9d8a62c",
  measurementId: "G-PPZ1ZHXVNC"
  })
}

export default firebase

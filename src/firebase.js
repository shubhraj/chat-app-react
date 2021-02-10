import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAI0KKqChbqUmvZ4oiJAH8M-Pxwa-gia8o",
    authDomain: "chat-app-react-b60ab.firebaseapp.com",
    projectId: "chat-app-react-b60ab",
    storageBucket: "chat-app-react-b60ab.appspot.com",
    messagingSenderId: "861135062033",
    appId: "1:861135062033:web:68c165707d17b1072f9db0",
    measurementId: "G-6V69N8DZLY"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const database = app.firestore();

  export default database;




import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "admin-dashboard-f00eb.firebaseapp.com",
  databaseURL: "https://admin-dashboard-f00eb-default-rtdb.firebaseio.com",
  projectId: "admin-dashboard-f00eb",
  storageBucket: "admin-dashboard-f00eb.appspot.com",
  messagingSenderId: "84415390150",
  appId: "1:84415390150:web:c40c7e488db45c7aa892c7",
  measurementId: "G-F76GJE7599",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;

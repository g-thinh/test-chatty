import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAzTKXI3OtyR63wmjbfwWJYMh6-CDs59WM",
  authDomain: "test-chatty.firebaseapp.com",
  databaseURL: "https://test-chatty.firebaseio.com",
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();

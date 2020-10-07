import firebase from "firebase";
require("dotenv").config();

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.DOMAIN,
  databaseURL: process.env.DB_BASE_URL,
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();

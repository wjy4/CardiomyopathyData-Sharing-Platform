import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";
import store from './store';
import Vuex from "vuex";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBahnGXrBYujkxsql_RvBJENFxcr67oaFE",
  authDomain: "cardiomyopathydataplatform.firebaseapp.com",
  databaseURL: "https://cardiomyopathydataplatform-default-rtdb.firebaseio.com",
  projectId: "cardiomyopathydataplatform",
  storageBucket: "cardiomyopathydataplatform.appspot.com",
  messagingSenderId: "1008168044389",
  appId: "1:1008168044389:web:155899fb46eb2298b5838c",
  measurementId: "G-DE6CM3QWT9"
};


const app = createApp(App);
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

app.use(router)
.use(store)
.use(Vuex)
.mount('#app');

export {firestore, auth}

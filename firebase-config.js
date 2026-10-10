import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCO0nf7ZUQY3ot_B6n_YpAfZXEYvl62JJI",
  authDomain: "ferreteriaalejandro-b5ae7.firebaseapp.com",
  projectId: "ferreteriaalejandro-b5ae7",
  storageBucket: "ferreteriaalejandro-b5ae7.firebasestorage.app",
  messagingSenderId: "766138720973",
  appId: "1:766138720973:web:cb05919242664e1085bf84"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

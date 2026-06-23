import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgnbCJx7s-FDeXIIyOdDNznIW8tHWxVGE",
  authDomain: "match-time-sports.firebaseapp.com",
  projectId: "match-time-sports",
  storageBucket: "match-time-sports.firebasestorage.app",
  messagingSenderId: "564914857095",
  appId: "1:564914857095:web:16e75fdaac2d3996d0c422",
  measurementId: "G-T21YM2BXM9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
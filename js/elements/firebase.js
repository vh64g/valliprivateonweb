import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js';
import { getAuth} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';


const firebaseConfig = {
    apiKey: "AIzaSyAiVWBDYa0CsiFlbb4PnEaSp0ntiUIVWNU",
    authDomain: "valliprivateonweb.firebaseapp.com",
    projectId: "valliprivateonweb",
    storageBucket: "valliprivateonweb.appspot.com",
    messagingSenderId: "577249226633",
    appId: "1:577249226633:web:eff365f8e9cb1d3d3abb58",
    measurementId: "G-M76NZ530K1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
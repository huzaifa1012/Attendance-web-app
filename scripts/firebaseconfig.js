  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBHum-KjRhizBOKKfhdgPFxP0rWo1acM_k",
    authDomain: "saylani-hackathon-project.firebaseapp.com",
    projectId: "saylani-hackathon-project",
    storageBucket: "saylani-hackathon-project.appspot.com",
    messagingSenderId: "682210403002",
    appId: "1:682210403002:web:81b1a289659cd574abd883"
  };

  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

  
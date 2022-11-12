import { app, auth } from "./firebaseconfig.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// variables 
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let signinButton = document.querySelector("#signin")
signinButton.addEventListener('click', signInTheUser)
function signInTheUser() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {

      const user = userCredential.user;


      swal("Good job!", "You clicked the button!", "success");
      location = "./pages/main.html"
      console.log("greate Sign In")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("No")
      swal("Wrong Data", "Please Enter A Correct Password");

    });

}




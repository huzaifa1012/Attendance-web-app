import { app, auth, db } from "./firebaseconfig.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { collection, addDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

let userName = document.querySelector("#userName")
let cnic = document.querySelector("#cnic")
let phone = document.querySelector("#phone")
let course = document.querySelector("#course")
let roll = document.querySelector("#roll")
let img = document.querySelector('#prof-img')
let hero = document.querySelector(".user-profile")
let inputCnic = document.querySelector("#input-cnic")
let loader = document.querySelector("#loader")
let SeeStatusButton = document.querySelector("#see-status-button")
SeeStatusButton.addEventListener('click', getId)
function getId() {
    hero.innerHTML = `
        <h1 id="name">
            <div class="loader"></div>
            `
    const q = query(collection(db, "students"), where("cnic", "==", inputCnic.value));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            if (doc) {
                hero.innerHTML = `
                <div class="backbone">
                            <img src="${data.img}" alt="" id="prof-img">
                            <h3 id="userName">${data.name} ${data.father}</h3>
                            <p id="cnic">${data.cnic}</p>
                            <p id="phone">${data.phone}</p>
                            <p id="course"> ${data.course}</p>
                            <p id="roll">${data.rollNo}</p>
                            </p>
                            
                        </div>`
            }
            else {

                loader.style.display = "none"



            }

        });
    });
}
import { app, auth,db } from "./firebaseconfig.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        console.log(auth.currentUser.uid)

    } else {
        location = "../index.html"

    }
});
// Variable 
let courseName = document.querySelector("#course-name")
let sectionName = document.querySelector("#sectionName")
let classTiming = document.querySelector("#class-timing")
let Schedule = document.querySelector("#Schedule")
let TeacherName = document.querySelector("#Teacher-name")
let batch = document.querySelector("#batch")
let addClassBtn = document.querySelector("#add-class")
addClassBtn.addEventListener('click', addClassFunc)

async function addClassFunc() {


    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Classes"), {
        sectionName: sectionName.value,
        classTiming: classTiming.value,
        Schedule: Schedule.value,
        TeacherName: TeacherName.value,
        batch: batch.value
    });



    // console.log(courseName.value,
    sectionName.value,
        classTiming.value,
        Schedule.value,
        TeacherName.value,
        batch.value
    // )
}

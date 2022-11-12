import { app, auth, db, storage } from "./firebaseconfig.js"
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


let fetchStudent = document.querySelector("#batch")
let mainsec = document.querySelector(".main-sec")
let get = document.querySelector(".button")
get.addEventListener("click", fetchStud)
function fetchStud() {
alert ("asd")
    const q = query(collection(db, "students"), where("course", "==", "Web & Mobile" ));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data()
//           
console.log(data.name)
mainsec.innerHTML += 
            `
            
            <div class="backbone">
            <img src="${data.img}" alt="" id="prof-img">
            <h3 id="userName">${data.name} ${data.father}</h3>
            <p id="cnic">${data.cnic}</p>
            <p id="phone">${data.phone}</p>
            <p id="course"> ${data.course}</p>
            <p id="roll">${data.rollNo}</p>
            <p id="roll">sdfhkfd</p>
            </p>
            <br>
            
        </div>
`
"asdasd "
        });
    });
}
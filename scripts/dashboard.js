import { app, auth, db, storage } from "./firebaseconfig.js"
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


let fetchStudent = document.querySelector("#course")
let mainsec = document.querySelector(".main-sec")
let get = document.querySelector(".button")
get.addEventListener("click", fetchStud)
let loader= document.querySelector(".loader")
function fetchStud() {
    if(fetchStudent.value === "Select Course"){
        swal("Please Select Course!", "Select Any Course Firstly Please ");
    }
    console.log(fetchStudent.value);
    mainsec.innerHTML = "" 

    const q = query(collection(db, "students"), where("course", "==", fetchStudent.value ));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data()
//           
console.log(data.name)

mainsec.innerHTML += `
            <div class="backbone">
           <div class="img-wrapper">
            <img src="${data.img}" alt="" id="prof-img">
            </div>
            <h3 id="userName">${data.name}  ${data.father}</h3>
            <p id="cnic"> CNIC : ${data.cnic}</p>
            <p id="phone"> PHONE :   ${data.phone}</p>
            <p id="course"> ENROLLED : ${data.course}</p>
            <p id="roll">ROLL NO.  ${data.rollNo}</p>
            <p id="roll">sdfhkfd</p>
            </p>
            <br>
            
        </div>
`
"asdasd "
 });
    });
}
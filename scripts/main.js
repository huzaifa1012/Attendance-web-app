import { app , auth , db , storage} from "./firebaseconfig.js"
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
let getdata = document.querySelector("#getdatabycourse")
// let inputsValue = getdata.value
let Getbutton = document.querySelector("#getButton")
Getbutton.addEventListener("click" , getByCourse)

function getByCourse (){

const q = query(collection(db, "students"), where("cnic", "==", getdata.value));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
  let data = doc.data()
  console.log(data.img)
});
// console.log(data.cnic)

});



}
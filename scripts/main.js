import { app , auth , db , storage} from "./firebaseconfig.js"
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
let getdata = document.querySelector("#getdatabycourse")
// let inputsValue = getdata.value

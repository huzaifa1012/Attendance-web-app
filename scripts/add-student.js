import { app, auth, db, storage } from "./firebaseconfig.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";


let studentName = document.querySelector("#sname")
let fatherName = document.querySelector("#fname")
let phone = document.querySelector("#phone")
let rollNo = document.querySelector("#rollNo")
let cnic = document.querySelector("#cnic")
let course = document.querySelector("#course")
let StudentClass = document.querySelector("#class")
let time = document.querySelector("#timing")
let image = document.querySelector("#image")
let url
let addStudent = document.querySelector("#add-Student")
addStudent.addEventListener("click", uploadImage)

async function uploadImage() {
    const storage = getStorage();

    let file = image.files[0]
    const storageRef = ref(storage, `image/${file.name}`);

    await uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
    saveData()
    async function saveData() {
        url = await getDownloadURL(storageRef)
        // console.log(url)
        const docRef = await addDoc(collection(db, "students"), {
            img: url,
            name: studentName.value,
            father: fatherName.value,
            phone: phone.value,
            rollNo: rollNo.value,
            cnic: cnic.value,
            course: course.value,
            class:StudentClass.value,
            time:time.value 
        });
        swal("Good job!", "You clicked the button!", "success");

    }
}


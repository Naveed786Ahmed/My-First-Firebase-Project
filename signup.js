import { auth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "./firebase.js";

const fName = document.getElementById("fName")
const lName = document.getElementById("lName")
const email = document.getElementById("email")
const password = document.getElementById("password")


const register = () => {

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            alert("Successfully Register")
            console.log(userCredential.user.emailVerified);
            location.pathname = "/index.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage ? errorMessage : errorCode)
        });
}

const registerbtn = document.getElementById("registerbtn")
registerbtn.addEventListener("click", register)



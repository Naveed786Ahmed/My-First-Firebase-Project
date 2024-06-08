import { auth, signInWithEmailAndPassword, sendPasswordResetEmail } from "./firebase.js";
const resetPassword = document.getElementById("resetPass")
const email = document.getElementById("email");
const password = document.getElementById("password");


const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            alert("Successfully Login")
            location.pathname = "/pages/profile.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

const Reset = () => {
    sendPasswordResetEmail(auth, email.value)
        .then(() => {
            alert("Check Your Email")
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

const loginbtn = document.getElementById("loginbtn")
loginbtn.addEventListener("click", login)
resetPassword.addEventListener("click", Reset)


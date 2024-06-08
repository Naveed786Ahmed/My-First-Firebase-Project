import { auth, onAuthStateChanged, sendEmailVerification, signOut } from "./firebase.js"

const profEmail = document.getElementById("profEmail")
const varified = document.getElementById("verify")
const varifybtn = document.getElementById("varified")
const logoutbtn = document.getElementById("logoutbtn")

onAuthStateChanged(auth, (user) => {
    if (user) {
        profEmail.innerHTML = user.email
        if (!user.emailVerified) {
            varified.innerHTML = "Your email is not verified. Please click on the button below to verify your email."
            varifybtn.style.display = "block"

        }
        else{
            varified.innerHTML = "Yeah Your Email is Varified"
        }
    }
    else {
        profEmail.innerHTML = "Currently No Email"
    }
});

const sendEmail = () => {

    sendEmailVerification(auth.currentUser)
        .then(() => {
            alert("Check Your Email After Varification Please Refresh Your Page!")
        });
}

const signOuts = () => {
    signOut(auth).then(() => {
        alert("Successfully Sign Out")
        location.pathname = "/index.html"
      }).catch((error) => {
        // An error happened.
      });
}


varifybtn.addEventListener("click", sendEmail)
logoutbtn.addEventListener("click", signOuts)

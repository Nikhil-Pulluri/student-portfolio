// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


let login = false;



let scroll_lock;



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzaLo46juKw6Fv5RGNMV6OZZP3orxMOP0",
  authDomain: "portfolio-c16fa.firebaseapp.com",
  projectId: "portfolio-c16fa",
  storageBucket: "portfolio-c16fa.appspot.com",
  messagingSenderId: "771212678531",
  appId: "1:771212678531:web:6f4797cab4dc6632e892b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 



const submit = document.getElementById("submit");

submit.addEventListener("click", (e)=> {
  e.preventDefault();


  
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;



  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // we need to disable the blur here 
    login = true;
    alert(login);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})







if(!login)
{
  document.addEventListener('scroll', ()=>{

    clearTimeout(scroll_lock);
  
    scroll_lock = setTimeout(()=>{
      const profile = document.getElementById('profile');
      const modal = document.getElementById('openModalBtn');
  
      const window_height = window.innerHeight;
  
      const trigger = profile.getBoundingClientRect().bottom;
  
      if(trigger<window_height)
      {
        modal.click();
      }
    }, 300)
    
  })
}


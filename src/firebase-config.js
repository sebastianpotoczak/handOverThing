import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyAS48etIvlJaTGi4x8YQfeE5N9DMNVX9ds",
    authDomain: "my-portfolio-project-91d94.firebaseapp.com",
    projectId: "my-portfolio-project-91d94",
    storageBucket: "my-portfolio-project-91d94.appspot.com",
    messagingSenderId: "522108625565",
    appId: "1:522108625565:web:57c7ce0a52989d90112a74"
  };
  


  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)





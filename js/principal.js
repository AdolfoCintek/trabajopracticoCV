
const signupForm = document.querySelector('#signup-form');  

signupForm.addEventListener('submit' , (e)  =>  { e.preventDefault() ; 

   const email = document.querySelector('#signup-email').value ; 
   const password = document.querySelector('#signup-password').value ; 

    
   import { getAuth, createUserWithEmailAndPassword} from "firebase/auth" ;
   const auth = getAuth();

    createUserWithEmailAndPassword( auth, email, password)
    .then((userCredential => {  
        const user = userCredential.user;       
        console.log ('sign up') ;
         
    }))

})  
         













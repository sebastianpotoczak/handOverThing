import Nav from './nav';
import tribal from '../assets/Decoration.svg'
import { useState } from 'react'
import validator from 'validator'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from '@firebase/auth';
import { auth } from '../firebase-config';

const LoginView = () => {

  const[loginEmail, setLoginEmail] = useState("");
  const[loginPassword, setLoginPassword] = useState("");
  const[displayLogin, setDisplayLogin] = useState("none");
  const[validateEmail, setValidateEmail] = useState(false)


  const loginStyle = {
    display: displayLogin
  }


  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setLoginEmail(newEmail)

    if(validator.isEmail(newEmail)){
      setValidateEmail(true)
    }

 
  }

  const handlePassword = (e) => {
      const newPassword = e.target.value 
      setLoginPassword(newPassword)
  }




  const handleClick = (e) => {
    if( validateEmail === false || loginPassword === "" || validateEmail === "" || loginPassword.length <= 6){
      setDisplayLogin("flex")
      e.preventDefault()
    }
     
    
        const user = signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword,
        );
    
    
  } 
  
  
  

    return(
      <>
      <div className="login">  
      <div className="content">
         
          <div className="login_contain">
          <Nav />

          </div>
          <div className="login_form">
              <h1>Zaloguj się</h1>
              <img src={tribal} />
              <div className="login_input">
                  <div className="login_element">
                      <p>Email</p>
                     <input onChange={handleEmail} value={loginEmail}/>
                     <h3 className="login_error" style={loginStyle} >Podany email jest nieprawidłowy!</h3>
                  </div>
           
                  <div className="login_element" >
                      <p>Hasło</p>
                    <input type="password" value={loginPassword} onChange={handlePassword}/>
                    <h3 className="login_error" style={loginStyle}  >Podane hasło jest błędne</h3>
                  </div>
                <div>  
                </div>
              </div>  
              <div className="login_submit">
                <a href="http://localhost:3000/#/rejestracja">Załóż konto</a>   
                    <a href="#" onClick={handleClick}>Zaloguj się</a>

              </div>
                   

            
                        
          </div>
         
          </div>
      </div>
      

      </>
    )
}


export default LoginView
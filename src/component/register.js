import Nav from "./nav"
import tribal from '../assets/Decoration.svg'
import { useState } from 'react'
import validator from 'validator'
import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { auth } from '../firebase-config'


const Register = () => {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[passwordRepeat, setPasswordRepeat] = useState("");
  const[display, setDisplay] = useState("none")
  const[validateEmail, setValidateEmail] = useState(false)

const registerError = {
  display: display
}



const handleEmail = (e) => {
  const newEmail = e.target.value;
  setEmail(newEmail)

  if(validator.isEmail(newEmail)){
    setValidateEmail(true)
  }


}

  const handlePassword = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)

  }
  const handlePasswordRepeat = (e) => {
    const newPasswordRepeat = e.target.value
    setPasswordRepeat(newPasswordRepeat)

  }



  const handleClick = (e) => {
    if( validateEmail === false || password === "" || passwordRepeat === ""  || password != passwordRepeat){
      setDisplay("flex")
      e.preventDefault()
    }else{
  
     
        const user = createUserWithEmailAndPassword(
          auth,
          email,
          password,
          passwordRepeat
        );

    }
   
  }


    return(
        <>
        <div className="login">  
        <div className="content">
           
            <div className="login_contain">
            <Nav />
  
            </div>
            <div className="login_form">
                <h1>Załóż konto</h1>
                <img src={tribal} />
                <div className="register_input">
                    <div className="login_element">
                        <p>Email</p>
                       <input value={email} onChange={handleEmail} type="text"/>
                       <h3 className="register_error" style={registerError}>Podaj poprawny email</h3>
                    </div>
             
                    <div className="login_element">
                        <p>Hasło</p>
                      <input type="password" value={password} onChange={handlePassword}/>
                      <h3 className="register_error" style={registerError}>Hasło powinno mieć 6 znaków</h3>
                    </div>


                    <div className="login_element">
                        <p>Powtórz hasło</p>
                      <input type="password" value={passwordRepeat} onChange={handlePasswordRepeat}/>
                      <h3 className="register_error" style={registerError}>Hasła muszą byc takie same</h3>
                    </div>
                  <div>  
                  </div>
                
  
                </div>  
                <div className="login_submit">
                  <a href="http://localhost:3000/#/login">Zaloguj się</a>   
                      <a href="http://localhost:3000/#/" onClick={handleClick}>Załóż konto</a>
  
                </div>
                     
  
              
                          
            </div>
           
            </div>
        </div>
        
  
        </>
    )
}

export default Register
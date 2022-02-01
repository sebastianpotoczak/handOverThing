import tribal from '../assets/Decoration.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useState } from 'react'
import validator from 'validator'



const Contact = () => {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[text, setText] = useState("");
    const[validate, setValidate] = useState(false)
    const[validate1, setValidate1] = useState(false)
    const[validate2, setValidate2] = useState(false)
    const[textDisplay, setTextDisplay] = useState("none")
    const[emailDisplay, setEmailDisplay] = useState("none")
    const[nameDisplay, setNameDisplay] = useState("none")
    const[successDisplay, setSuccessDisplay] = useState("none")


   const success = {
       display: successDisplay
   }
 
   const textError = {
        display: textDisplay
    }
    const nameError = {
        display: nameDisplay
    }
    const emailError = {
        display: emailDisplay
    }
        



    const handleName = (e) => {

      const newName =  e.target.value  
        if(name === "" || name.length < 2){
            setNameDisplay("flex")
            setValidate(false)
            e.preventDefault();
        
        }else{
            setNameDisplay("none")
            setValidate(true)
        }
      setName(newName)
    }   


    const handleEmail = (e) => {

        const newEmail = e.target.value;
        setEmail(newEmail)
          if(validator.isEmail(newEmail)){
            setValidate1(true)
            setEmailDisplay("none")
           
        }else{
            setValidate1(false)
            setEmailDisplay("flex")
        }
        
    
       
    }

    const handleText = (e) => {

        const newText = e.target.value
        setText(newText)
        if(text === "" || text.length < 120){
            setValidate2(false)
            e.preventDefault();
            setTextDisplay("flex")
        }else{
            setValidate2(true)
            setTextDisplay("none")
        } 
    }
 





    

    const handleClick = (e) => { 

        if(validate === false || validate1 === false || validate2 === false){
            alert("Coś poszło nie tak")
            e.preventDefault();
        }else{

            const dataToSend = {
                name,
                email,
                message: text
            }


            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
                })
                .then((response) => {
                    return response.json()}
                    ).then(data => {
                console.log('Success') ;
                })
                .catch((error) => {
                console.error('Error:', error);
                });
                e.preventDefault();
                setSuccessDisplay("flex")
                setName("")
                setEmail("")
                setText("")
        }
    }

    



    return(
        <>
        <Element name="contact">
            <div className="contact">
                <div className="contact_contain">
                    <div className="contact_text">
                        <h1>Skontaktuj się z nami</h1>
                        <img src={tribal}/>
                        <h3 className="contact_success" style={success}>Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</h3>
                        <div className="contact_name">
                            <div className="contact_element">
                            <p>Wpisz swoje imię</p>
                            <input type="text" value={name} onChange={handleName}/>
                            <h3 className="name_error" style={nameError}>Podane imię jest nieprawidłowe!</h3>

                            </div>
                            <div>
                            <p>Wpisz swój email</p>
                            <input type="text" value={email} onChange={handleEmail}/>
                            <h3 className="email_error" style={emailError}>Podany email jest nieprawidłowy!</h3>
                            </div>
                         
                        </div>
                        <div>

                        <p className="last_input">  Wpisz swoją wiadomość</p> 
                        <textarea type="text" value={text} onChange={handleText} />
                        <h3 className="text_error" style={textError}>Wiadomość musi mieć conajmniej 120 znaków!</h3>

                        </div>
                        <div className="button_contact">
                        <a className="contact_button" href="#" onClick={handleClick}>Wyślij</a>
                        </div>
                       
                </div>
                    <div className="footer">
                   
                    <a href="https://www.instagram.com/" target="_blank"></a>
                    <a href="https://www.facebook.com/" target="_blank"></a>
                </div>
                </div>
                <h3 className="footer_title">Copyright by Coders Lab</h3>
               
            </div>
            </Element>
        </>
    )
}

export default Contact
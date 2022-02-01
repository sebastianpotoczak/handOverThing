import React, { useState, useEffect, useCallback } from "react";
import MultiStep from "./multiStep";
import { useBetween } from "use-between";
import tshirt from '../assets/Icon-1.svg';
import reverse from '../assets/Icon-4.svg';




const useCounter = () => {
    const[things, setThings] = useState("");
    const[bag, setBag] = useState(0);
    const[addres,setAddres] = useState("")
    const[thing, setThing] = useState("");
    const[people, setPeople] = useState("");
    const[organization, setOrganization] = useState("");
    const[street, setStreet] = useState("");
    const[city, setCity] = useState("");
    const[code, setCode] = useState("");
    const[phone, setPhone] = useState("");
    const[date, setDate] = useState("");
    const[hour, setHour] = useState("");
    const[delivery, setDelivery] = useState("");
    const[display, setDisplay] = useState("none")
    const[buttonDisabled, setButtonDisabled] = useState(false)

    const styles = {
        display: display,
        color: "red",
        marginBottom: 20,
        fontSize: 25
    }

    
    return {
      things,
      setThings,
      bag,
      setBag,
      addres,
      setAddres,
      thing,
      setThing,
      people,
      setPeople,
      organization,
      setOrganization,
      street,
      setStreet,
      city,
      setCity,
      code,setCode,
      phone,setPhone,
      date,setDate,
      hour,setHour,
      delivery, setDelivery,
      display,setDisplay,
      styles,
      setButtonDisabled,
      buttonDisabled
    };
  
  };


const FormApp = () => {

    const[lastStep, setLastStep] = useState("flex")


    const steps = [
        {name: 'StepOne', component: <FormFirst/>},
        {name: 'StepTwo', component: <FormSecond/>},
        {name: 'StepThree', component: <FormThird />},
        {name: 'StepFour', component: <FormFourth/>},
        {name: 'StepResult', component: <FormResult/>},
        {name: 'StepFinaly', component: <FormFinaly/>}
      ];
    
   
      const styles = {
          display: lastStep
      }
      const onClick = () => {
        // if(steps === 5){
        //     setLastStep("none")
        // }
        console.log(steps)
      }
    
    


    return(
        <>
            <div className="Form_app">
                    <MultiStep  onClick={onClick} className="multi_step" steps={steps}/>
                    
                
           </div>
        </>
    )
    }

    const useSharedCounter = () => useBetween(useCounter);
   

const FormFirst = () => {
    
    const {things,setThings} = useSharedCounter();
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setThings(newThings)
    }
    console.log(things)

    return(
        
        <>  
            <h4 className="form_steps">krok 1/4</h4>
        <div className="form_app" >
          
          <div className="Form_first"  >
              <h1>Zaznacz co chcesz oddać:</h1>
            <div>
                <input type="radio" value="ubrania, które wprowadzają się do ponownego użytku" name="things" onClick={handleChange} />
                <p>ubrania, które wprowadzają się do ponownego użytku</p>
            </div>
            <div>
                <input type="radio" value="ubrania, do wyrzucenia" name="things" onChange={handleChange}/>
                <p>ubrania, do wyrzucenia</p>
            </div>
            <div>
                <input type="radio" value="zabawki" name="things" onChange={handleChange}/>
                <p>zabawki</p>
            </div>
            <div>
                <input type="radio" value="książki" name="things" onChange={handleChange}/>
                <p>książki</p>
            </div>
            <div>
                <input type="radio" value="Inne" name="things" onChange={handleChange}/>
                <p>Inne</p>
            </div>
         
          
        </div>

        </div>
        </>
    )

}
  


const FormSecond = () => {
        
    const {bag, setBag} = useSharedCounter();
    
    const handleChange = (e) => {
        const newThings = e.target.value;
        setBag(newThings)
    }
    return(
        <>
          <div className="form_second">
          <>  
 
          <h4 className="form_steps">krok 2/4</h4>
      <div className="form_app" >
  
        <div className="Form_first"  >
            <h2 className="second_title">Podaj 60l worków, w które spakowałeś / aś rzeczy:</h2>
        </div>
        <div className="second_form_element">
            <h2>Liczba 60l worków</h2>
            <select value={bag} onChange={handleChange}>
                <option className="second_element" disabled value="">- wybierz -</option>
                <option className="second_element">1</option>
                <option className="second_element">2</option>
                <option className="second_element">3</option>
                <option className="second_element">4</option>
                <option className="second_element">5</option>
            </select>
        </div>
      </div>
      </>

          </div>
        
        </>
    )
}

const FormThird = () => {
  


    const {thing, setThing, people, setPeople, organization, setOrganization} = useSharedCounter();
    
    const handleChange = (e) => {
        const newThing = e.target.value;
        setThing(newThing)
    }

    const handleClick = (e) => {
        const newPeople = e.target.value;
        setPeople(newPeople)
    }

    const handleInput = (e) => {
        const newInput = e.target.value
        setOrganization(newInput);
    }

    return(
        <>

          <h4 className="form_steps">krok 3/4</h4>
      
      <div className="form_app" >
  
        <div className="form_third">
       
      
        <div className="local">
            <h2 className="local_title">Lokalizacja:</h2>
            <select value={thing} onChange={handleChange}>
            <option className="second_element" disabled value="">- wybierz -</option>
                <option>Poznań</option>
                <option>Warszawa</option>
                <option>Kraków</option>
                <option>Wrocław</option>
                <option>Katowice</option>
            </select>
        </div>
        
              <h1>komu chcesz pomóc?</h1>
            <div>
                <input type="radio" value="ubrania, które wprowadzają się do ponownego powrotu" name="things" onClick={handleClick} />
                <p>dzieciom</p>
            </div>
            <div>
                <input type="radio" value="ubrania, do wyrzucenia" name="things" onClick={handleClick} />
                <p>samotnym matkom</p>
            </div>
            <div>
                <input type="radio" value="zabawki" name="things" onClick={handleClick} />
                <p>bezdomnym</p>
            </div>
            <div>
                <input type="radio" value="książki" name="things" onClick={handleClick} />
                <p>niepełnosprawnym</p>
            </div>
            <div>
                <input type="radio" value="Inne" name="things" onClick={handleClick} />
                <p>osobom starszym</p>
            </div>
         
          
       



       
        <div className="help_organization">
            <h3>Wpisz nazwę konetnej organizacji (opcjonalnie)</h3>
            <input className="help_write" onChange={handleInput}/>
        </div>
      </div>
     

          </div>
        
        </>
    )
}


const FormFourth = () => {


    const {street, setStreet, city, setCity,
         code, setCode, phone, setPhone, date, setDate, hour, 
         setHour, delivery, setDelivery} = useSharedCounter();

    

    const handleChange = (e) => {
        const newStreet = e.target.value;
        setStreet(newStreet)
    }
    const handleCity = (e) => {
        const newCity = e.target.value
        setCity(newCity)
    }
    const handlePhone = (e) => {
        const newPhone = e.target.value
        setPhone(newPhone)
    }
    const handleDate = (e) => {
        const newDate = e.target.value
        setDate(newDate)
    }
    const handleHour = (e) => {
        const newHour = e.target.value
        setHour(newHour)
    }
    const handleDelivery = (e) => {
        const newDelivery = e.target.value
        setDelivery(newDelivery)
    }
    const handleCode = (e) => {
        const newCode = e.target.value
        setCode(newCode)
    }

   
    
    return(
        <>
          <div className="form_second">
          <>  
          <h4 className="form_steps">krok 4/4</h4>
      
      <div className="form_app">
        
            <div className="addres_form">

        
            <div className="left_site">
            <h2>Adres odbioru:</h2>
            <label>
                    <h3>Ulica</h3>
                    <input onChange={handleChange}/>
            </label>
                <label>
                    <h3 >Miasto</h3>
                    <input onChange={handleCity}/>
                </label>
                <label>
                    <h3>Kod <br/>pocztowy</h3>
                    <input onChange={handleCode} />
                </label>
                <label>
                    <h3>Numer <br/> telefonu</h3>
                    <input onChange={handlePhone}/>
                </label>

            </div>
             <div className="right_site">
                <h2>Termin odbioru:</h2>
                <label>
                    <h3>Data</h3>
                    <input onChange={handleDate}/>
                </label>
                <label>
                    <h3>Godzina</h3>
                    <input onChange={handleHour}/>
                </label>
                <label>
                    <h3>Uwagi<br/> dla kuriera</h3>
                    <textarea className="delivery_info" />
                </label>

            </div>
            </div> 

      </div>
    
      </>

          </div>
        
        </>
    )
    
}





const FormResult = () => {

    const {things,display,bag,thing,street, city ,code, phone, date, hour, delivery} = useSharedCounter();
 
    const styles = {
        display: display,
        color: "red",
        marginBottom: 20,
        fontSize: 25
    }

    // const arrResult = [things,bag,thing,street, city ,code, phone, date, hour];
    //   const sendForm = (e) => {
    //       arrResult.map(function (el) {
    //           if(el === ""){
    //               setDisplay("flex")
    //           }else{

    //           }
    //       })
    //   }
    return(
        <>
          <div className="form_second">
          <h4 className="form_result">Podsumowanie twojej darowizny</h4>
          
      <div className="form_app">

          <div className="result_info">
          <div className="result_info_contain">
                  <h3 classname="error_title_result" style={styles}>Brakuje wszystkich informacji!</h3>
              </div>
              <div className="result_info_contain">
                  <img src={tshirt} alt="T-shirt"/>
                  <h3>{bag} worki, {things}</h3>
              </div>
              <div className="result_info_contain">
                  <img src={reverse} alt="Reverse icon"/>
                  <h3>dla lokalizacji: {thing}</h3>
              </div>
          
              
          </div>
 
          

      <div className="addres_form">

        
    <div className="left_site">
        <h2>Adres odbioru:</h2>
        <label>
        <h3>Ulica</h3>
        <h3>{street}</h3>
            
        </label>
            <label>
            <h3 >Miasto</h3>
            <h3>{city}</h3>
            
            
            </label>
            <label>
                <h3>Kod <br/>pocztowy</h3>
                <h3>{code}</h3>
            </label>
            <label>
                <h3>Numer <br/> telefonu</h3>
                <h3>{phone}</h3>
            </label>

        </div>
        <div className="right_site">
            <h2>Termin odbioru:</h2>
            <label>
                <h3>Data</h3>
                <h3>{date}</h3>
            </label>
            <label>
                <h3>Godzina</h3>
                <h3>{hour}</h3>
            </label>
            <label>
                <h3>Uwagi<br/> dla kuriera</h3>
                <h3>{delivery}</h3>
            </label>

        </div>
        </div>      
      </div>

          </div>
        
        </>
    )
}

const FormFinaly = () => {

    return(
    <>
    <div className="form_second">
     
        
    <div className="form_app">
            <h4 className="form_finally">Dziękujemy za przesłanie formularza</h4>

            </div>
        </div>
      </>
    )
}





export{
    FormApp,
    useCounter
  }


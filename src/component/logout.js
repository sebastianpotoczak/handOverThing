import Nav from "./nav"
import tribal from '../assets/Decoration.svg'

const Logout = () => {
    return(
        <>
        <div className="login">  
        <div className="content">
           
            <div className="login_contain">
            <Nav />
  
            </div>
            <div className="login_form">
                <h1>Wylogowanie nastąpiło <br/> pomyślnie!</h1>
                <img src={tribal} />
                <div className="logout_input">
                  
                  <a href="http://localhost:3000/#/">Strona główna</a>   
                     
  
                </div>
                     
  
              
                          
            </div>
           
            </div>
        </div>
        
  
        </>
    )
}

export default Logout
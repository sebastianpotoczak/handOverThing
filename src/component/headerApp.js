import Nav from "./nav"
import tribal from '../assets/Decoration.svg'



const HeaderApp = () => {
    return(
        <>
        <div className="header_app">
          

     
            <Nav />
          
            <div className="header_app_view">
                <h1>Oddaj rzeczy, których już nie chcesz <br /> POTRZEBUJĄCYM</h1>
                <img src={tribal} />
                <h2>Wystarczą 4 proste kroki:</h2>
                <div className="header_app_content">
                   <div className="header_element">
                   <div>
                   <h3>1</h3>
                       <p>Wybierz <br/> rzeczy</p>
                           
                           </div>
                
                   </div>
                   <div className="header_element">
                   <div>
                   <h3>2</h3>
                       <p>Spakuj je <br/> w worki</p>
                           
                           </div>
             
                   </div>
                   <div className="header_element">
                       <div>
                       <h3>3</h3>
                       <p>Wybierz <br/> fundację</p>

                       </div>
                      
                   </div>
                   <div className="header_element">
                       <div>
                       <h3>4</h3>
                       <p>Zamów <br/> kuriera</p>
                       </div>
                   </div>
                </div>
            </div>
            </div>
            <div className="form_info">
          <div className="form_info_content">
          <h1>Ważne!</h1>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać..</p>
      </div>
      </div>
           
        </>
    )
}


export default HeaderApp
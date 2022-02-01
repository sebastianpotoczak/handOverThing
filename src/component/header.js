import decorationImage from "../assets/Decoration.svg"
import Nav from "./nav"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {
   
    
    return(
        <>
        <Element name="start">
        <header> 
        <div className="header_right">

        </div>
      
            
            <div className="header_left">
               

                
            <Nav />
            <div className="text">
                <div >

               
            <div className="title">
            <h1>Zacznij pomagać!</h1>
            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
             </div>
             <img src={decorationImage} />
             <div className="button_header">
             <a href="http://localhost:3000/#/oddaj-rzeczy">ODDAJ <br /> RZECZY</a>
             <a href="#">ZORGANIZUJ ZBIÓRKĘ</a>
             </div>
             </div>
             </div>

           
           
            
            

        </div>

        </header>
       
        
         </Element>  
        </>
    )
}



export default Header
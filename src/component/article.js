import decorationImage from "../assets/Decoration.svg"
import tshirt from '../assets/Icon-1.svg'
import box from '../assets/Icon-2.svg'
import focus from '../assets/Icon-3.svg'
import reverse from '../assets/Icon-4.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Article = () => {

    return(
        <>
        <Element name="whats_going">
       <article>
            
            <div className="article_title"> 
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={decorationImage} />
            </div>
        
                <div className="article_config">
                
              
                <div className="content">
                <div className="article">
               
                      
                             
                        

                <div className="article_element">
                     <img src={tshirt} />
                                <h1>Wybierz rzeczy</h1> 
                                <p>ubrania, sprzęt,<br /> sprzęt i inne</p>
                             </div>

                             <div className="article_element">
                             <img src={box} />
                             <h1>Spakuj je</h1> 
                                <p>skorzystaj z <br/> worków na śmieci</p>
                             </div>

                             <div className="article_element">
                             <img src={focus} />
                                <h1>Zdecyduj się komu <br /> chcesz pomóc</h1> 
                                <p>wybierz zaufane <br /> miejsce</p>

                             </div>

                             <div className="article_element">
                             <img src={reverse} />
                                <h1>Zamów kuriera</h1> 
                                <p>kurier przyjedzie <br/> w dogodnym terminie</p>
                             </div>

              
                        
                    </div>
                </div>
            </div>
            <div className="article_button">
                <a href="http://localhost:3000/#/oddaj-rzeczy">ODDAJ<br /> RZECZY</a>
            </div>
            
       </article>
       </Element>
        </>
    )

}

export default Article
import { NavLink } from 'react-router-dom'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Nav = () => {

    const loginUrl = "http://localhost:3000/#/login"
    const registerUrl = "http://localhost:3000/#/rejestracja"
    return(
        <>
            <nav>
                <div className="nav_contain">
                    <div className="login_contain">
                    <a href={loginUrl}>Zaloguj</a>
                <a href={registerUrl}>Załóż konto</a>
                    </div>
              

             <ul class="menu" role="menu">
                 
             <NavLink to="/" smooth={true} className="react_scroll">
                <li>Start</li>
                </NavLink>
            
                <Link to="whats_going" smooth={true} className="react_scroll">
                <li>O co chodzi?</li>
                </Link>

                <Link to="aboutMe" smooth={true} className="react_scroll">
                <li>O nas</li>
                </Link>
                <Link to="company" smooth={true} className="react_scroll">
                <li>Fundacja i organizajce</li>
                </Link>
                <Link to="contact" smooth={true} className="react_scroll">
                <li>Kontakt</li>
                </Link>
            </ul>

                </div>
           
              
            </nav>
        </>
    )
}


export default Nav
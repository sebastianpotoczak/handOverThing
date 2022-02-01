import tribal from '../assets/Decoration.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useEffect, useState } from 'react';
import Post from './post';
import Paginate from './pagination';

const buttons = [
    "Fundacje",
    "Organizacje",
    "Inne"
]



const Concern = () => {
    const [fundations, setFundations] = useState([]);
    const [current, setCurrent] = useState("Fundacje");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    useEffect(() => {
        fetch(`http://localhost:3005/${current}`)
            .then(res => res.json())
            .then(res => setFundations(res))
    }, [current])


    const handleCurrent = fund => (e) => {
        setCurrent(fund)
        e.preventDefault()
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = fundations.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return(
        <>
        <Element name="company">
            <div className="concern">
               
                <div className="concern_contain"> 
                    <div className="concern_tittle">
                        <h1>Komu pomagamy?</h1>
                      
                        <img src={tribal}/>
                        <div className="concern_position">
                        {buttons.map(button => (
                    <a href="#" className="fund_button" onClick={handleCurrent(button)}>{button}</a>
                    ))}
                        </div>
                       {fundations.map(fund => (
                           <p>{fund.superTitle}</p>
                       ))}
                    </div>

                    <div className="concern_content">
                    <Post post={currentPosts} />
                   
                  
                    </div>
                    <Paginate 
                    postsPerPage={postsPerPage}
                    totalPosts={fundations.length}
                    paginate={paginate}
                    />
                  
                  
                </div>
            </div>
            </Element>
        </>
    )
}

export default Concern
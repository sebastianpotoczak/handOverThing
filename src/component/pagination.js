import { useState } from "react";

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {



    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }






  
    return (
     
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={(e) => (paginate(number), e.preventDefault())}  href='#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      
    );
  };


  export default Paginate
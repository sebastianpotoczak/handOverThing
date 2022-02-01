


const Post = (  {post} ) => {

   



    return(
        <>

          
                   
                   {post.map(fund => (
                     
                       <div className="fund_contain">
                       <div>
                       <h2 className="fund_tittle">{fund.title}</h2>
                       <p className="fund_subTittle">{fund.text}</p>
                       </div>
                       <i className="fund_items">{fund.items}</i>   
                       </div>
                    
                   ))}

                    
               

  </>
        


    )
}



export default Post


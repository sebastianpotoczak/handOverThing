import Header from '../component/header'

import Article from './article'
import Contact from './contact'
import Section from './section'
import AboutUs from './aboutUs'
import Concern from './organzation'
import Info from './info'
import Paginate from './pagination'


const AppView = () => {

    return(
        <>
            
            <Header />
            <Info />
            <Article />
            <AboutUs />
            <Concern />
            <Contact />
        </>
    )

}


export default AppView
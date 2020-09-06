import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'



class About extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <p>This is the about page</p>
                <Footer/>
            </div>
        )
    }
}
export default About
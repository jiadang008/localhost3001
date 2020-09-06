import React from 'react'
import Header from '../header/header'
import Body from '../body/body'
import Footer from '../footer/footer'



class Home extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}
export default Home
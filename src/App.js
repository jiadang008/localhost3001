import React from 'react'
  import FirstComponent from './components/firstComponent'
  import SecondComponent from './components/secondComponent'
  import ThirdComponent from './components/thirdComponent'
  import Header from './head,body,footer/head'
  import Body from './head,body,footer/body'
  import Footer from './head,body,footer/footer'
  import {
    BrowserRouter ,

    Route,

  } from "react-router-dom";
class App extends React.Component{
  render(){
    return(
      <Header/>
      <Body/>
      <Footer/>
    <BrowserRouter>
        <Route exact path="/" component={FirstComponent}/>
        <Route path="/secondComponent" component={SecondComponent}/>
        <Route path="/thirdComponent" component={ThirdComponent}/>
     </BrowserRouter>
    )
  }

}
export default App


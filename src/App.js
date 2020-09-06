import React from 'react'
  /*import FirstComponent from './components/firstComponent'
  import SecondComponent from './components/secondComponent'
  import ThirdComponent from './components/thirdComponent'
  */import Home from './home/home'
  import About from '../src/about/about'
  import Contact from '../src/contact/contact'

  import {
    BrowserRouter ,

    Route,

  } from "react-router-dom";
class App extends React.Component{
  render(){
    return(
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
     </BrowserRouter>
    )
  }

}
export default App


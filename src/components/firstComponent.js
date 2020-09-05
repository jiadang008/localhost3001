import React from 'react'
import {
    Link
  } from "react-router-dom";
import { func } from 'prop-types';

class Jia extends React.Component{
    state = {
        name: '',
        city:''
    }
    myfunction=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    myCity=(event)=>{
        this.setState({
            city: event.target.value
        })
    }
    clickfunction=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <>
            this is the firstComponent
            <input onChange={this.myfunction}/>
            <select onChange={this.myCity}>
                <option value="">---select---</option>
                <option value="FV">FV</option>
                <option value="HB">HB</option>
            </select>
            <button onClick={this.clickfunction}>button</button>
            {this.state.name}
            <Link to="/secondComponent">user to secondComponent</Link>
            <Link to="/thirdComponent">this is the third Component</Link>
            </>
        )
    }
}
export default Jia
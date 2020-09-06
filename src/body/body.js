import React from 'react'
import {
    Link
  } from "react-router-dom";
import { func } from 'prop-types';

class Body extends React.Component{
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
            <input onChange={this.myfunction}/>
            <select onChange={this.myCity}>
                <option value="">---select---</option>
                <option value="FV">FV</option>
                <option value="HB">HB</option>
            </select>
            <button onClick={this.clickfunction}>button</button>
            {this.state.name}
            </>
        )
    }
}
export default Body
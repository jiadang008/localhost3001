import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

class Contact extends React.Component{
    state={
        first_name: '',
        last_name: '',
        password: '',
        email:'',
    }
    firstnamefunction=(event)=>
    {
        this.setState({
            first_name: event.target.value
        })
    }
    lastnamefunction=(event)=>
    {
        this.setState({
            last_name: event.target.value
        })
    }
    passwordfunction=(event)=>
    {
        this.setState({
            password: event.target.value
        })
    }
    emailfunction=(event)=>
    {
        this.setState({
            email: event.target.value
        })
    }
    render(){
        return(
            <div>
                <Header/>
                    <div class="row">
                        <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                            <input placeholder="Placeholder" id="first_name" type="text" class="validate" onChange={this.firstnamefunction}/>
                            <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate" onChange={this.lastnamefunction}/>
                            <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input disabled value="I am not editable" id="disabled" type="text" class="validate"/>
                            <label for="disabled">Disabled</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input id="password" type="password" class="validate" onChange={this.passwordfunction}/>
                            <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input id="email" type="email" class="validate" onChange={this.emailfunction}/>
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                            This is an inline input field:
                            <div class="input-field inline">
                                <input id="email_inline" type="email" class="validate"/>
                                <label for="email_inline">Email</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                <Footer/>
                {this.state.first_name}
                {this.state.last_name}
                {this.state.password}
                {this.state.email}
            </div>
        )
    }
}
export default Contact
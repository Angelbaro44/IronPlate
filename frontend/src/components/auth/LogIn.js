import React, { Component, Fragment } from 'react';
import actions from '../../services/index'

class LogIn extends Component {

    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
         actions.logIn(this.state).then(user => {
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <div className='signup-master-div'>
                <div className='signup-daddy-div'>
                    <div className='signup-son-div'>
                <h2>LogIn</h2>
                <form className='signup-form-tag' onSubmit={this.handleSubmit}>
                    <p>Email:<input placeholder='email' name="email" type="email" onChange={this.handleChange} /></p>
                    <p>Password:<input placeholder='password' name="password" type="password" onChange={this.handleChange} /></p>
                    <input type="submit" value="Log In"/>
                </form>
                </div>
                </div>
            </div>        );
    }
}

export default LogIn;
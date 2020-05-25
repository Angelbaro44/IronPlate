import React, { Component, Fragment } from 'react';
import actions from '../../services/index'

class SignUp extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  e => {
        e.preventDefault()
            actions.signUp(this.state).then(user=> {
                this.props.setUser({...user.data})  
            }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h2>SignUP</h2>
               
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='email' name="email" type="email" onChange={this.handleChange} />
                    <input placeholder='Password' name="password" type="password" onChange={this.handleChange} />
                    <input placeholder='Name' name="name" type="text" onChange={this.handleChange}/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </Fragment>
        );
    }
}

export default SignUp;
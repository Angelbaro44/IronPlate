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
            <div className='signup-master-div'>
                <div className='signup-daddy-div'>
                    <div className='signup-son-div'>
                        
                        <h2>SignUP</h2>
                       
                        <form className='signup-form-tag' onSubmit={this.handleSubmit}>
                         <div>
                             <p>Name:<input placeholder='name' name="name" type="text" onChange={this.handleChange}/></p>
                             <p>Email:<input placeholder='email' name="email" type="email" onChange={this.handleChange} /></p>
                             <p>Password:<input placeholder='password' name="password" type="password" onChange={this.handleChange} /></p>
                         </div>
                         
                         <input type="submit" value="Sign Up"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
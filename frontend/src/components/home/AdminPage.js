import React, { Component } from 'react';
import actions from '../../services/index';




class AdminPage extends Component {
      state = {

      } 
      handleChange = e => this.setState({[e.target.name]: e.target.value})
  
      handleSubmit =  e => {
          e.preventDefault()
              actions.updateData(this.state).then(post=> {
                  // this.props.setUser({...post.data})  
                  console.log(post.data)
              }).catch(({ response }) => console.error(response.data));
      }
      render() {
          return (
              <React.Fragment>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <h2>SignUP</h2>
                 
                  <form onSubmit={this.handleSubmit}>
                      <p>Welcome text on the home page:<br/><input placeholder='welcome text' name="welcomeText" type="text" onChange={this.handleChange} /></p>
                      <p>Mission statment text :<br/><input placeholder='mission statmen' name="missionStatment" type="text" onChange={this.handleChange} /></p>
                      <input type="submit" value="Save"/>
                  </form>
              </React.Fragment>
          );
      }
}

export default AdminPage;
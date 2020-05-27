import React, { Component } from 'react';
import actions from '../../services/index';




class AdminPage extends Component {
      state = {

      } 





      handleChangeQuotes = e => this.setState({[e.target.name]: e.target.value})
  
      handleSubmitQuotes =  e => {
          e.preventDefault()
              actions.postQuote(this.state).then(quote=> {
                  // this.props.setUser({...post.data})  
                  console.log(quote.data)
              }).catch(({ response }) => console.error(response.data));
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
              <div className='signup-master-div'>
                  <div className='signup-daddy-div'>
                      
                      <div className='signup-son-div'>
                          <h2>New Quotes</h2>
                         
                          <form className='signup-form-tag' onSubmit={this.handleSubmitQuotes}>
                              <p>Quote title:<br/><input placeholder='quote title' name="quote_title" type="text" onChange={this.handleChangeQuotes} /></p>
                              <p>Quote message :<br/><input placeholder='quote message' name="quote_body" type="text" onChange={this.handleChangeQuotes} /></p>
                              <p>Quote chapter and line :<br/><input placeholder='quote source' name="quote_source" type="text" onChange={this.handleChangeQuotes} /></p>
                              <p>Quote was posted by :<br/><input placeholder='posted by' name="quote_by" type="text" onChange={this.handleChangeQuotes} /></p>
    
                              <input type="submit" value="Save"/>
                          </form>
                      </div>
    
                      <div className='signup-son-div'>
                          <h2>Admin Edits</h2>
                         
                          <form className='signup-form-tag' onSubmit={this.handleSubmit}>
                              <div>
                                  <p>Welcome text on the home page:<br/><input placeholder='welcome text' name="welcomeText" type="text" onChange={this.handleChange} /></p>
                                  <p>Mission statment text :<br/><input placeholder='mission statmen' name="missionStatment" type="text" onChange={this.handleChange} /></p>
                              </div>
                              <input type="submit" value="Save"/>
                          </form>
                      </div>
                  </div >
              </div>
          );
      }
}

export default AdminPage;
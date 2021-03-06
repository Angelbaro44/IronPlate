import React, { Component } from 'react';
import actions from '../../services/index';




class AdminPage extends Component {
      state = {
        loading:false

      } 





      handleChangeQuotes = e => this.setState({[e.target.name]: e.target.value})
  
      handleSubmitQuotes =  e => {
          e.preventDefault()
          this.setState({
              loading:true
          })
              actions.postQuote(this.state).then(quote=> {
                  // this.props.setUser({...post.data})  
                  this.setState({
                      quote_title:'',
                      quote_body:'',
                      quote_source:'', 
                      quote_by:'',
                      loading:false
                  })
              }).catch(({ response }) => console.error(response.data));
      }

      handleChange = e => this.setState({[e.target.name]: e.target.value})
  
      handleSubmit =  e => {
          e.preventDefault()
          this.setState({
            loading:true
        })
              actions.updateData(this.state).then(post=> {
                  this.setState({
                    welcomeText:'',
                    missionStatment:'',
                    loading:false
                })
              }).catch(({ response }) => console.error(response.data));
      }







      render() {
          return (
              <div className='signup-master-div'>
                  <div className='signup-daddy-div'>
                      
                      <div className='signup-son-div'>
                          <h2>New Quotes</h2>
                         {this.state.loading?<p>loading...</p>:null}
                          <form className='signup-form-tag' onSubmit={this.handleSubmitQuotes}>
                              <p>Quote title:<br/><input placeholder='quote title' name="quote_title" type="text" value={this.state.quote_title} required onChange={this.handleChangeQuotes} /></p>
                              <p>Quote message :<br/><input placeholder='quote message' name="quote_body" type="text" value={this.state.quote_body} required onChange={this.handleChangeQuotes} /></p>
                              <p>Quote chapter and line :<br/><input placeholder='quote source' name="quote_source" type="text" value={this.state.quote_source} required onChange={this.handleChangeQuotes} /></p>
                              <p>Quote was posted by :<br/><input placeholder='posted by' name="quote_by" type="text" value={this.state.quote_by} required onChange={this.handleChangeQuotes} /></p>
    
                              <input type="submit" disabled={this.state.loading} value="Save"/>
                          </form>
                      </div>
    
                      <div className='signup-son-div'>
                          <h2>Admin Edits</h2>
                         
                          <form className='signup-form-tag' onSubmit={this.handleSubmit}>
                              <div>
                                  <p>Emergancy Message: <input placeholder='mission statment'  name="missionStatment" type="text"  /></p>
                                  <p>Welcome text on the home page:<br/><input placeholder='welcome text' value={this.state.welcomeText} name="welcomeText" type="text" onChange={this.handleChange} /></p>
                                  <p>Mission statment text :<br/><input placeholder='mission statment' value={this.state.missionStatment} name="missionStatment" type="text" onChange={this.handleChange} /></p>
                                  <p>About Us text :<br/><input placeholder='About Us statment' name="missionStatment" type="text"/></p>
                                  <p>WEDNESDAYS Time :<br/><input placeholder='WEDNESDAYS Time' name="missionStatment" type="text"/></p>
                                  <p>WEDNESDAYS Event :<br/><input placeholder='WEDNESDAYS Event' name="missionStatment" type="text"/></p>
                                  <p>SATURDAYS Time:<br/><input placeholder='SATURDAYS Time' name="missionStatment" type="text"/></p>
                                  <p>SATURDAYS Event::<br/><input placeholder='SATURDAYS Event' name="missionStatment" type="text"/></p>
                                  <p>SUNDAYS Time:<br/><input placeholder='SUNDAYS Time' name="missionStatment" type="text"/></p>
                                  <p>SUNDAYS Event:<br/><input placeholder='SUNDAYS Event' name="missionStatment" type="text"/></p>
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
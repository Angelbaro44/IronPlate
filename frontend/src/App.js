import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile'
import actions from './services/index'
import './App.css';
import 'bootstrap'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';

class App extends Component {
  
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };  
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    this.setState({...user.data})
    console.log('coolest ')

  }

  setUser = (user) => this.setState(user)
  
  logOut = async () => {
    let res = await actions.logOut()
    this.setUser({email:null, createdAt: null, updatedAt: null, _id: null }) //FIX 
  }

  render(){

    return (
    <BrowserRouter>
        {this.state.email}
        <nav className='nav'>


        {/* <div className='desktopOnly'>

          <NavLink to="/">Home |</NavLink>
          <section>
          <NavLink to="/">News |</NavLink>
          <NavLink to="/">Events |</NavLink>
          <NavLink to="/">Ministries |</NavLink>
          <NavLink to="/">Resorcses |</NavLink>
          <NavLink to="/">Saints & Sinners |</NavLink>
          <NavLink to="/">Contact Us |</NavLink>
          </section>
          {this.state.email ? 
            <Fragment>
             <NavLink onClick={this.logOut} to='/'>Log Out |</NavLink> 
             <NavLink to="/profile">Profile|</NavLink>
             </Fragment>
             :
             <Fragment>
             <NavLink to="/sign-up">Sign Up |</NavLink>
             <NavLink to="/log-in">Log In |</NavLink>
             </Fragment>
            }
      </div> */}







                  <MDBContainer>
          <MDBNavbar
            color='light-blue lighten-4'
            style={{ marginTop: '20px' }}
            light
          >
            <MDBContainer>
              <MDBNavbarBrand>TAMIAMI BAPTIST CHURCH</MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to='#!'>NEWS</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>EVENTS</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>MINISTRIES</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <div class="btn-group dropright">
                      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        RESORCSES
                      </button>
                      <div class="dropdown-menu">
                      </div>
                    </div>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>SAINTS & SINNERS</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>CONTACT US</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>     
      </nav>










      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/sign-up" render={(props)=><SignUp {...props} setUser={this.setUser} />} />
        <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={this.setUser}/>} />
        <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state}/>} />
        
        <Route component={NotFound} />
      </Switch>













    </BrowserRouter>
  );
  }
}
export default App;

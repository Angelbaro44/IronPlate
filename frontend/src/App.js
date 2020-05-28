import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import AdminData from './components/home/AdminPage';
import Quotes from './components/home/Quotes'
import Profile from './components/profile/Profile';
import actions from './services/index';
import './App.css';
import 'bootstrap';
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
console.log(this.state)
    return (
    <BrowserRouter>
        {this.state.name}
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
            id='nav-bar'
            style={{ marginTop: '20px', padding:'0' }}
            light
          >
            <MDBContainer id='nav-filter'>
              <MDBNavbarBrand><NavLink to='/'>TAMIAMI BAPTIST CHURCH</NavLink></MDBNavbarBrand>
              <MDBNavItem><NavLink to="/sign-up">Sign Up </NavLink></MDBNavItem>
             <MDBNavItem><NavLink to="/log-in">Log In </NavLink></MDBNavItem>
             {this.state.role==='admin'?<MDBNavItem><NavLink to="/admin-page">admin </NavLink></MDBNavItem>:null}
             <MDBNavItem><a href="https://www.youtube.com/user/tamiamibaptistchurch/live">Live Service </a></MDBNavItem>
              <MDBNavbarToggler id='menu-btn-correction'
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
                    <MDBNavLink to="/quotes">QUOTES </MDBNavLink>
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
        <Route exact path='/quotes' render={(props)=><Quotes {...props} setUser={this.setUser} />} />
        {this.state.role==='admin'?<Route exact path="/admin-page" render={(props)=><AdminData {...props} setUser={this.setUser} />} />:null}
      </Switch>












      {/* <footer><div class="footer">
            <div class="inner-footer">

              <div class="footer-items">
                <h1>Angel Baro </h1>
                <p>If your reading this it's too late. She took the kids, i lost the car, and im late on my morgage. I can't keep living like this... tomorrow at 3PM i will hang out at the mall to try and lift my spirits. Wish me luck, Good Bye. </p>
              </div>

              <div class="footer-items">
                <h3>Quick Links</h3>
                <div class="border1"></div>
                <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/motorcycles'><li>Motorcyles</li></NavLink>
                <NavLink to='/cigars'><li>Cigars</li></NavLink>
                <NavLink to='/trips'><li>Trips</li></NavLink>
                </ul>
              </div>

              <div class="footer-items">
                <h3>Skills</h3>
                <div class="border1"></div>
                <ul>
                  <a href="#"><li>HTML</li></a>
                  <a href="#"><li>CSS</li></a>
                  <a href="#"><li>JavaScript</li></a>
                  <a href="#"><li>BootStrap</li></a>
                </ul>
              </div>

              <div class="footer-items">
                <h3>Contact Me</h3>
                <div class="border1"></div>
                <ul>
                  <li><i class="fa fa-map-marker" aria-hidden="true"></i>Miami, Florida</li>
                  <li><i class="fa fa-phone" aria-hidden="true"></i>786-445-6192</li>
                  <li><i class="fa fa-envelope" aria-hidden="true"></i>angelbaro44@icloud.com</li>
                </ul>

                <div class="social-media">
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-google-plus-square"></i></a>
                </div>
              </div>
            </div>

            <div class="footer-bottom">
              Copyright &copy; Angel Baro 2020.
    </div>
          </div>
          </footer> */}
    </BrowserRouter>
  );
  }
}
export default App;

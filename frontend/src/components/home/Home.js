import React, { Component } from 'react';
import actions from '../../services/index';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBNavLink } from "mdbreact";
import '../home/YoutubeCycles';
import YoutubeCycles from '../home/YoutubeCycles';
import { Link } from 'react-router-dom';

class Home extends Component {
  async componentDidMount() {
    var debugInput = document.querySelector("input");
    function updateDebugState() {
      document.body.classList.toggle('debug-on', debugInput.checked);
    }
    debugInput.addEventListener("click", updateDebugState);
    updateDebugState();
  }

  render() {
    return (
      <React.Fragment>
        <div class="debug">
          <label><input type="checkbox" /> Debug</label>
        </div>
        <div class="demo__info">

        </div>

        <div class="parallax">
          <div id="group1" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
              <div class="title">

              <div>
                  <h1>Join us for church online this sunday</h1>
                  <br />
                  <br />
                  <br />
                  <Link className='home-links-btn-white'><button >Watch Live online</button></Link>
                  <br />
                  <br />
                  <Link className='home-links-btn-white'><button >Pastor's Message</button></Link>
                </div>
                {/* <img className='moble-off' width='600px' src='images/test-church-2.jpg'></img> */}


              </div>



              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
              <div id='make-row' class="title">
              <video  autoPlay  loop muted preload src="images/test-church-video.mp4" type="video/mp4"/>

                
            </div>
          </div>
          <div id="group2" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
              <div class="title">


              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
              <div class="title">
                <section><h2 className='home-h2-tag-white'>Welcome to Church</h2></section>
                <br/>
                <section id='screen-70'><p className='home-p-tag-white'>Tamiami Baptist Church is an authentic church in Miami for everyday people of all ages, cultures and backgrounds. Whoever you are and wherever you've been, you're welcome to join us to connect, be inspired and grow through Jesus and a genuine sense of belonging.</p></section>
                <br/>
                <Link className='home-links-btn-white'><button >Join Us</button></Link>


              </div>
            </div>
            <div class="parallax__layer parallax__layer--back">
              <div class="title">



              </div>
            </div>
          </div>
          <div id="group3" class="parallax__group" >
            <div class="parallax__layer parallax__layer--fore">
              <div class="title">




              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
              <div id='make-row' class="title">

                <div id='screen-70' className='moble-fixed-div'>
                  <h2 className='home-h2-tag-black'>About Us</h2>
                  <p className='home-p-tag-black'>
                  Tamiami Baptist Church goes back in its foundations to the early 50’s. The church used to be a strong, vibrant community of believers where hundreds of people met for worship.
                  </p>
                  <p className='home-p-tag-black moble-off'>
                  Its ministry was predominantly carried out in English and to an Anglo community. As the decades went by, the community changed and so did the church. In 2004, the Lord led Rev. David Menendez, with a small faithful remnant of followers of Christ, to once again up-lift Christ’s cross at the crossroads of Miami.
                  </p>
                  <p className='home-p-tag-black moble-off'>
                  Since then the English ministry has been revitalized through the faithful preaching and teaching of God’s word. A Spanish ministry was also launched in 2007 to proclaim the gospel of Christ to our Hispanic community. We are a church committed to follow Christ and make disciples out of all peoples.
                 </p>

                  <Link className='home-links-btn-black'><button >Read More</button></Link>
                </div>
                <img className='moble-off' width='300px' src='images/test-welcome-to-church.jpg'></img>


              </div>
            </div>
          </div>
          <div id="group4" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
              <div class="title">



              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
              <div class="title">
                <div style={{ width:'100%',height: '100%' }}> <YoutubeCycles /></div>



              </div>
            </div>
            <div class="parallax__layer parallax__layer--back">
              <div class="title">



              </div>
            </div>
            <div class="parallax__layer parallax__layer--deep">
              <div class="title">



              </div>
            </div>
          </div>
          <div id="group5" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
              <div class="title">



              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
            <div id='make-row' class="title">

              <div className='moble-fixed-div'>
                <h2 className='home-h2-tag-black'>Mission Statment</h2>
                <p className='home-p-tag-black'>It is our mission and purpose to develop a congregation with the passion of knowing God and making Him known through our reformed faith. We aim to become a channel of His Grace for God to seek, save, & restore the lost through our faithful witness of the Gospel of Christ; to receive and disciple those whom God adds to His body, instructing them in water Baptism & Holy Communion in obedience to the Lord. We desire to ground believers in sound Biblical doctrine as explained in our 1689 Reformed Baptist Confession of Faith, as we manifest the fruit & the gifts of the Holy Spirit for our growth, edification and God’s Glory.
              Ephesians 4:11-16</p>
                {/* <h3 className='home-h2-tag-black moble-off'>vision</h3>
                <p className='home-p-tag-black moble-off'>We envision a church vibrant with the enthusiasm of knowing God and making Him known as we grow through the study of our reformed faith; that system of doctrine that best explains the Scriptures as expressed in our Baptist confession of faith of 1689. We pray that God may use our ministry to call and develop lay leaders, teachers, elders, and pastors that may pass on the legacy of Grace in our reformed faith to the next generation of faithful Disciples of Christ.
              2 Timothy 2:1-2, 14-15, 3:14-17</p> */}
                <Link className='home-links-btn-black'><button >Read More</button></Link>
              </div>
              <img className='moble-off mission-image' width='400px' src='images/test-bible.jpeg'></img>
              </div>
            </div>
          </div>
          <div id="group6" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
              <div class="title">



              </div>
            </div>
            <div class="parallax__layer parallax__layer--back">
              <div class="title">



              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
              <div id='make-col' class="title ">
                <section>
                    <h2  className='home-h2-tag-white'>Church Hours</h2>
              </section>
              <section id='screen-90' className='moble-to-col'>
                <section  id='screen-100' className=''>
                    <h2 className='home-h2-tag-white'>WEDNESDAYS</h2>
                    <p className='home-p-tag-white'>
                      5:45pm<br/> Dinner ($4.00)<br/>
                     6:00pm<br/> Fellowship & Prayer<br/>
                      7:00pm<br/> Bible Study
                    </p>
                  </section>
                  <section id='screen-100'  className=''>
                    <h2 className='home-h2-tag-white'>SATURDAYS</h2>
                    <p className='home-p-tag-white'>
                    2:30pm<br/> Evangelism Training every second Saturday of each month followed by Community Outreach 3:30-5:30pm.
                    </p>
                  </section>
                  <section  id='screen-100' className=''>
                    <h2 className='home-h2-tag-white'>SUNDAYS</h2>
                    <p className='home-p-tag-white'>
                      10:00am<br/> Praise & Worship Service<br/>
                      11:30am<br/> Adult Sunday School<br/>
                      12:00pm<br/> Youth (15 yrs. - college) Sunday School
                      </p>
                  </section>
              </section>

              </div>
            </div>
          </div>
          <div id="group7" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
              <div class="title">



              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
              <div class="title">
                <MDBContainer>
                  <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Contact us
      </h2>
                  <p className="text-center w-responsive mx-auto pb-5 moble-off">
                    We would love to hear from you.
      </p>
                  <MDBRow md="3" id='make-row' className="text-center  moble-off">
                    <ul className="list-unstyled mb-0 make-row moble-off">
                      <li>
                        <MDBIcon icon="map-marker-alt" size="2x" className="blue-text moble-off" />
                        <p>Sanctuary 860 SW 76 Ct,<br /> Miami, FL</p>
                      </li>
                      <li>
                        <MDBIcon icon="phone" size="2x" className="blue-text mt-4 moble-off" />
                        <p>(305)-261-1464</p>
                      </li>
                      <li>
                        <MDBIcon icon="envelope" size="2x" className="blue-text mt-4 moble-off" />
                        <p>info@TamiamiBC.org</p>
                      </li>
                    </ul>
                  </MDBRow>
                  <MDBRow id=" make-col">

                    <MDBCol md="9" id='make-col' className="md-0  make-col">
                      <form id='make-col'>
                        <MDBRow>
                          <MDBCol md="6">
                            <div className="md-form mb-0">
                              <MDBInput type="text" id="contact-name" label="Your name" />
                            </div>
                          </MDBCol>
                          <MDBCol md="6">
                            <div className="md-form mb-0">
                              <MDBInput
                                type="text"
                                id="contact-email"
                                label="Your email"
                              />
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="12">
                            <div className="md-form mb-0">
                              <MDBInput type="text" id="contact-subject" label="Subject" />
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="12">
                            <div className="md-form mb-0">
                              <MDBInput
                                type="textarea"
                                id="contact-message"
                                label="Your message"
                              />
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </form>
                      <div className="text-center text-md-left">
                        <MDBBtn color="primary" size="md">
                          Send
            </MDBBtn>
                      </div>
                    </MDBCol>

                  </MDBRow>
                </MDBContainer>

              </div>
            </div>
          </div>
        </div>












      </React.Fragment>
    );
  }
}

export default Home;

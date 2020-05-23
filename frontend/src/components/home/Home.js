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





              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
              <div id='make-row' class="title">
                <div>
                  <h1>Join us for church online this sunday</h1>
                  <br />
                  <br />
                  <br />
                  <Link className='home-links-btn'><botton>Watch Live online</botton></Link>
                  <br />
                  <br />
                  <Link className='home-links-btn'><botton>Message from Paster</botton></Link>
                </div>
                <img className='moble-off' width='600px' src='images/test-church-2.jpg'></img>


              </div>
            </div>
          </div>
          <div id="group2" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
              <div class="title">


              </div>
            </div>
            <div class="parallax__layer parallax__layer--base">
              <div class="title">
                <h2 className='home-h2-tag'>Welcome to Church</h2>
                <p className='home-p-tag'>Tamiami Baptist Church is an authentic church in Miami for everyday people of all ages, cultures and backgrounds. Whoever you are and wherever you've been, you're welcome to join us to connect, be inspired and grow through Jesus and a genuine sense of belonging.</p>
                <Link className='home-links-btn'><botton>Join Us</botton></Link>


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

                <div className='moble-fixed-div'>
                  <h2 className='home-h2-tag'>Mission Statment</h2>
                  <p className='home-p-tag'>It is our mission and purpose to develop a congregation with the passion of knowing God and making Him known through our reformed faith. We aim to become a channel of His Grace for God to seek, save, & restore the lost through our faithful witness of the Gospel of Christ; to receive and disciple those whom God adds to His body, instructing them in water Baptism & Holy Communion in obedience to the Lord. We desire to ground believers in sound Biblical doctrine as explained in our 1689 Reformed Baptist Confession of Faith, as we manifest the fruit & the gifts of the Holy Spirit for our growth, edification and God’s Glory.
  Ephesians 4:11-16</p>
                  <h3 className='home-h3-tag moble-off'>vision</h3>
                  <p className='home-p-tag moble-off'>We envision a church vibrant with the enthusiasm of knowing God and making Him known as we grow through the study of our reformed faith; that system of doctrine that best explains the Scriptures as expressed in our Baptist confession of faith of 1689. We pray that God may use our ministry to call and develop lay leaders, teachers, elders, and pastors that may pass on the legacy of Grace in our reformed faith to the next generation of faithful Disciples of Christ.
  2 Timothy 2:1-2, 14-15, 3:14-17</p>
                  <Link className='home-links-btn'><botton>Mission Statment...</botton></Link>
                </div>
                <img className='moble-off' src='images/test-bible.jpeg'></img>


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
                <div style={{ height: '100%' }}> <YoutubeCycles /></div>



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
              <div class="title">
              


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
              <div id='make-row' class="title ">
              <section>
                  <h2>WEDNESDAYS</h2>
                  <p>
                    -5:45 pm Dinner ($4.00), Cafeteria
                   -6:00 pm Fellowship & Prayer, Cafeteria
                    -7:00 pm English Bible Study, Cafeteria
                  </p>
                </section>
                <section>
                  <h2>SATURDAYS</h2>
                  <p>
                    -Evangelism Training every second Saturday of each month from 2:30-3:30 pm followed by Community Outreach from 3:30-5:30 pm.
                  </p>
                </section>
                <section>
                  <h2>SUNDAYS</h2>
                  <p>
                    -10:00 am, English Praise & Worship Service
                    -11:30 am, English Adult Sunday School, Cafeteria
                    -12:00 Noon, English Youth (15 yrs. - college) Sunday School, Room 207A
                    </p>
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

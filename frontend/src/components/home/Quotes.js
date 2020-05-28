import React, { Component } from 'react';
import actions from '../../services/index';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
      "mdbreact";


class Quotes extends Component {
      state = {
            post:[]
      }

      componentDidMount() {

            actions.getQuote().then(post => {
                  console.log(post.data)
                  this.setState({
                        post: post.data
                  })
            }).catch(({ response }) => console.error(response));
      }

      displayterms = () => {
            return (
                  this.state.post.map((count, i) => {


                        return (


                              <div className='quote-block-div'>
                                          <button>X</button>
                                          <h3 >{count.quote_title}</h3>
                                          <p >{count.quote_body}</p>
                                          <p >{count.quote_source}</p>
                                          <p >{count.quote_by}</p>
                              </div>



                        )

                  })
            )
      }


      render() {
            console.log(this.state)
            return (
                  <div className='quotes-master-div'>
                        <div className='quotes-daddy-div'>
                              <div className='quotes-son-div'>
                              {this.displayterms()}
                              
                              
                               </div>
                        </div>
                  </div>
            );
      }
}

export default Quotes;

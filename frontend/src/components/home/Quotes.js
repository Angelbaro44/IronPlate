import React, { Component } from 'react';
import actions from '../../services/index';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
      "mdbreact";


class Quotes extends Component {
      state = {
            post:[],
            index:0
      }

      componentDidMount() {

            actions.getQuote().then(post => {
                  console.log(post.data)
                  this.setState({
                        post: post.data
                  })
            }).catch(({ response }) => console.error(response));
      }



deleteOne= (_id) =>{
      actions.deleteQuote({_id}).then(data => {
            console.log(data)
      }).catch(({ response }) => console.error(response)); 
}






      displayterms = () => {
            return (
                  this.state.post.map((count, i) => {
                             
                        return (


                              <div className='quote-block-div'>
                                          <button  onClick={()=>this.deleteOne(count._id)}></button>
                                          <h3 >{count.quote_title}</h3>
                                          <p >{count.quote_body}</p>
                                          <p >{count.quote_source}</p>
                                          <p >{count.quote_by}</p>
                                          <p >{count._id}</p>
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

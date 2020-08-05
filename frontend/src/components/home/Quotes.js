import React, { Component } from 'react';
import actions from '../../services/index';



class Quotes extends Component {
      state = {
            post:[],
            index:0
      }

      async componentDidMount() {

            actions.getQuote().then(post => {
                  this.setState({
                        post: post.data
                  })
            }).catch(({ response }) => console.error(response));

            let user = await actions.isLoggedIn()
            this.setState({...user.data})
      }



deleteOne= (_id) =>{
      actions.deleteQuote({_id}).then(data => {
            this.setState({post:[]});
                  actions.getQuote().then(post => {
                        this.setState({
                              post: post.data
                        })
                  }).catch(({ response }) => console.error(response));
            
      }).catch(({ response }) => console.error(response)); 
}

      displayterms = () => {
            return (
                  this.state.post.map((count, i) => {
                        return (
                              <div className='quote-block-div'>
                                          {this.state.role==='admin'?<button  onClick={()=>this.deleteOne(count._id)}>X</button>:null}
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

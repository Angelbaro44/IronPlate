import React, { Component } from 'react';
import actions from '../../services/index';

class Quotes extends Component {
state={

}

componentDidMount() {

       actions.getQuote().then(post=> {
            console.log(post.data)
              this.setState({
                post:post.data
              })
          }).catch(({ response }) => console.error(response));
}



      render() {
            return (
                  <div>
                        
                  </div>
            );
      }
}

export default Quotes;

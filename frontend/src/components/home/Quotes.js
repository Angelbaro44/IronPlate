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
            console.log(this.state)
            return (
                  <div className='quotes-master-div'>
                  <div className='quotes-daddy-div'>
                      <div className='quotes-son-div'>
                          
                          <h2>SignUP</h2>
                       <div className='quote-block-div'>
                              <h3>Be Strong</h3>                     
                              <p>Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.</p>
                              <p>Joshua 1:9 (NIV)</p>                         
                              <p>Dev:Angel Baro</p>
                       </div>
                       <div className='quote-block-div'>
                              <h3>Shelter Under the Lord</h3>                     
                              <p>Praise the Lord,
for he has shown me the wonders of his unfailing love.
He kept me safe when my city was under attack.
In panic I cried out,
“I am cut off from the Lord!”
But you heard my cry for mercy
and answered my call for help.</p>
                              <p>Psalm 31:21-22 (NLT)</p>                         
                              <p>Dev:Angel Baro</p>
                       </div>
                       <div className='quote-block-div'>
                              <h3>No Fear</h3>                     
                              <p>Don't be afraid, for I am with you.
Don’t be discouraged, for I am your God.
I will strengthen you and help you.
I will hold you up with my victorious right hand.</p>
                              <p> Isaiah 41:10 (NLT)</p>                         
                              <p>Dev:Angel Baro</p>
                       </div>

                      </div>
                  </div>
              </div>
            );
      }
}

export default Quotes;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../../src/App.css'
const apiKey = 'AIzaSyDZNDn44BCa7TZCnCwrHJoOwNeqBbSQqD8';
const channelID = 'UCIvK3zry6RI7308u5IGbNSg';
const limit = 1;

var url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${limit}`





class YoutubeCycles extends Component {

      componentDidMount = () => {
            this.getYoutubeData()
            console.log(this.state)
      }
      state = {
            items: [],
            indexCount: 0
      }

      posClicked = () => {
            if (this.state.indexCount < 12) {
                  this.setState({ indexCount: this.state.indexCount += 1 });
                  this.getYoutubeData()
                  console.log('hello')

            }
            console.log(this.state.indexCount);

      }
      negClicked = () => {
            if (this.state.indexCount > 0) {
                  this.setState({ indexCount: this.state.indexCount -= 1 });
                  this.getYoutubeData()
                  console.log('hello')
            }
            console.log(this.state.indexCount);

      }


      getYoutubeData = () => {


            fetch(url).then(res => res.json()).then(res => {
                  console.log(res);
                  if(res.items)
                  this.setState({
                        items: res.items,
                        videoId: res.items[this.state.indexCount].id.videoId,
                        videoTitle: res.items[this.state.indexCount].snippet.title,
                        videoChannelTitle: res.items[this.state.indexCount].snippet.channelTitle
                  })

            })
      }



      render() {

            console.log(this);
            return (
                  <div style={{textAlign:'-webkit-center', width:'100%', height:'100%'}}>
                  <br/><br/>
                 <div><section  style={{width:'60%'}}><h2 className='moble-off home-h2-tag-white'><a  id='redditHeaderUsername'>"{this.state.videoTitle}"</a></h2></section></div>
                 <br/>
                 <div style={{width:'100%', height:'80%'}}>
                 {/* <button className='youtubeButtonsLeft' onClick={this.negClicked}> <p className='verticalText'>Newer Video</p>  </button> */}
                              <div className='moble-video'><iframe  className='youtubeVideo' width="70%" height="90%" src={`https://www.youtube.com/embed/${this.state.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                              {/* <button className='youtubeButtonsRight' onClick={this.posClicked}>  <p className='verticalText'>Older   Video</p>    </button> */}
                              <br/>
                              <Link to='/' className='home-links-btn-white'><button >More Videos</button></Link>

                 </div>
                 <br/><br/><br/>
           </div>
            );
      }
}

export default YoutubeCycles;
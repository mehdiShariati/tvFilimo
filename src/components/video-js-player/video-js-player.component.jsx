import React from 'react';
import videojs from 'video.js'
import "video.js/dist/video-js.css";


export default class VideoJSPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    const sub=this.props.movie.subtitle_data.subtitle[0];


    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: this.props.movie.movie_src,
        type: 'application/vnd.apple.mpegurl'
      }],
      tracks:[]

    };
    if(sub !== undefined) {
      videoJsOptions.tracks = [{
        src: this.props.movie.subtitle_data.subtitle[0].src_vtt,
        srclang: this.props.movie.subtitle_data.subtitle[0].lng_fa
      }];
    }

    this.player = videojs(this.videoNode, videoJsOptions, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });


  
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div style={{zIndex:90,position:"fixed",top:"0",right:"0",left:"0",bottom:"0",width:"100%",height:"100%"}}     >	
        <div data-vjs-player style={{width:"100%",height:"100%"}}>
          <video ref={ node => this.videoNode = node }   className="vjs-matrix video-js"></video>
        </div>
      </div>
    )
  }
}
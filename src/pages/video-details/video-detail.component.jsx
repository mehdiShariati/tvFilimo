import React,{useEffect} from "react";
import {VideoDetailWrapper,
  
}from "./video-detail.styles";
import {withRouter} from "react-router-dom";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {connect} from "react-redux";
import {StartfetchingSpecificMovie} from "../../redux/content/content.actions";

import VideoContent from "../../components/video-content/video-content.component";

const VideoConentWithSpinner=WithSpinner(VideoContent);
const VideoDetail=({match,startFetchingMovie,isLoadings,movie})=>{
console.log(match.params);

useEffect(()=>{
    startFetchingMovie(match.params.movieId);
},[])

return(

  <VideoDetailWrapper>
      <VideoConentWithSpinner isLoading={!isLoadings} movieData={movie} ></VideoConentWithSpinner>

  </VideoDetailWrapper>
);
}
const mapDispatchToProps=dispatch=>({

    startFetchingMovie:(movieId)=>dispatch(StartfetchingSpecificMovie(movieId))
})

const mapStateToProps=state=>({
isLoadings:state.contents.isMovieLoading,
movie:state.contents.movieContent

})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(VideoDetail));
import React,{useEffect} from "react";
import {withRouter} from "react-router-dom";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


import {connect} from "react-redux";
import {StartfetchingSpecificMovie} from "../../redux/content/content.actions";
import VideoJSPlayer from "../video-js-player/video-js-player.component";

const PlayerWithSpinner=WithSpinner(VideoJSPlayer);

const VideoPlayerWrapper=({startFetchingMovieData,match,isLoading,movie})=>{
  
    useEffect(()=>{
      
        console.log(match);
        startFetchingMovieData(match.params.movieId);

    },[])
  
    return(
        <PlayerWithSpinner  isLoading={!isLoading} {...movie} />
    )


    
}


const mapStateToProps=state=>({
    isLoading:state.contents.isMovieLoading,
    movie:state.contents.movieContent
  })
  const mapDispatchToProps=dispatch=>({
    startFetchingMovieData:(movieId)=>dispatch(StartfetchingSpecificMovie(movieId))
    
  })
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(VideoPlayerWrapper));
import React from "react";
import {
    Contentdiv,
    MovieDetailsWrapper,
    DetailRow,
    ImgaeMovie,
    DetailWrapper,
    MovieTitleFarsi,
    MovieTitleEng,
    DescriptionWrapper,
    Descriptionparagraph,
    MovieDetailSpan
} from "./video-content.styles";
import VideoJsPlayer from "../video-js-player/video-js-player.component";


 const VideoContent=({movieData})=>{
     


    const videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [{
          src: `https://cors-anywhere.herokuapp.com/${movieData.movie.movie_src}`,
          type: "application/x-mpegURL"
        }]
      }
    return(
    <Contentdiv>
    <MovieDetailsWrapper>
        <DetailRow>
            <ImgaeMovie src={movieData.movie.movie_img_b} />
            
            <DetailWrapper>

                <MovieTitleFarsi>
                {movieData.movie.movie_title}
                </MovieTitleFarsi>

                <MovieTitleEng>
                {movieData.movie.movie_title_en}
                </MovieTitleEng>

                <DescriptionWrapper>
                        <Descriptionparagraph>
                           <MovieDetailSpan> {movieData.movie.country_1}  </MovieDetailSpan>
                           <MovieDetailSpan> {movieData.movie.produced_year} </MovieDetailSpan>
                        </Descriptionparagraph>

                </DescriptionWrapper>

            </DetailWrapper>
          

        </DetailRow>

    <VideoJsPlayer { ...videoJsOptions } />
    </MovieDetailsWrapper>

  </Contentdiv>



 );
    }

 export default VideoContent;
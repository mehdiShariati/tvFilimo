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
    MovieDetailSpan,
    ActionButton,
    CastWrapper,
    Tags,
    ButtonWrapper,
    TextSpan,
    ImgPlay
} from "./video-content.styles";
import {withRouter} from "react-router-dom";
import ContentRow from "../content-row/content-row.component";
import { withFocusable, withNavigation } from 'react-tv-navigation';

 const VideoContent=({movieData,recome,history})=>{
     
const PlayButtonWithFocus=({movieurl,text,history})=>{
    return(
        <ActionButton  onClick={()=>history.push(`/w/${movieurl}`)}>
            <ImgPlay src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjkgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uLXBsYXk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iaWNvbi1wbGF5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik02LjM1ODY1MzI0LDEuMTMyMjUwMDUgQzguMjQzNDQyNjIsMS40OTY4NTQ1NiAxMi45ODgyMDc4LDMuNzI2MDMwNTkgMTguMzE2MzQ2NSw2LjgyMjE3MTQ5IEMyNC4yNTk3MjA5LDEwLjI3NTY4MDQgMjguOTEyMTc4OSwxMy42MzU5MDQ1IDI5LjUwMTUyNywxNC44NDA4MTU4IEMyOS45MTA4NDYxLDE1LjI1NTI5NzggMzAuMTYyMDc5NSwxNS44MTYwNzQ2IDMwLjE2MjA3OTUsMTYuNDMzNDI4MiBDMzAuMTYyMDc5NSwxNi45NzkwNjg4IDI5Ljk2NTgyMzUsMTcuNDgwNTEzNCAyOS42Mzc2MjM0LDE3Ljg3NTgxODEgQzI4Ljg3MDc0MzksMTkuMTUxNzcxNyAyNC4zMDM3MzI3LDIyLjQyODk3MTMgMTguNTA4NTkxOSwyNS43OTQ5NDcyIEMxMy4xNzgxNDYyLDI4Ljg5MDkzOTggOC40MzE5ODQ0MywzMS4xMTkzNjY3IDYuNTUxODYzODgsMzEuNDgwNDQyNiBDNi4yNDQxNDY2LDMxLjYxNjUyMjQgNS45MDIyOTY5LDMxLjY5MjMxMiA1LjU0MjI1ODM4LDMxLjY5MjMxMiBDNC4yNjg5Mjc3NiwzMS42OTIzMTIgMy4yMjMyMjc2MSwzMC43NDQyOTc4IDMuMTEwMjQ1MjEsMjkuNTMzOTUyIEMyLjQ2NDk2OTgzLDI3LjY4Mjg3NTMgMiwyMi40NjgxNDQ0IDIsMTYuMzI0MjQ3MyBDMiwxMC4xODY4NjY1IDIuNDY0MDI3NzksNC45NzY1Mzg2MSAzLjEwODI4Mzc2LDMuMTIwNTQwOTkgQzMuMjEwNDkxMTgsMS45MzMyNjA3MyA0LjI2MTE2ODE1LDEgNS41NDIyNTgzOCwxIEM1LjgyODU2NDI5LDEgNi4xMDMzNjgzNSwxLjA0NjYxMDQ1IDYuMzU4NjUzMjQsMS4xMzIyNTAwNSBaIiBpZD0iQ29tYmluZWQtc2hhcGUtMTkxMDIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg==" alt="play icon" />
            <TextSpan>{text}</TextSpan>
        </ActionButton>
    )
};
const PlaybuttonWithFocusFunction=withFocusable(withRouter(PlayButtonWithFocus));



    return(
    <Contentdiv>
   
     
    <MovieDetailsWrapper>
        <DetailRow>
            <ImgaeMovie src={movieData.movie.movie_img_b} />
            
            <DetailWrapper>

                <MovieTitleFarsi >
                {movieData.movie.movie_title}
                </MovieTitleFarsi>

                <MovieTitleEng >
                {movieData.movie.movie_title_en}
                </MovieTitleEng>

                <DescriptionWrapper>
                        <Descriptionparagraph>
                           <MovieDetailSpan > {movieData.movie.country_1}  </MovieDetailSpan>
                           <MovieDetailSpan > {movieData.movie.produced_year} </MovieDetailSpan>
                        </Descriptionparagraph>
                         <CastWrapper>
                            <Tags><p style={{color:"white"}}>{movieData.movie.category_1}</p></Tags>
                            <Tags><p style={{color:"white"}}>{movieData.movie.category_2}</p></Tags>
                         </CastWrapper>
                                <ButtonWrapper>
                              <PlaybuttonWithFocusFunction focusKey={'MENU-5'} text={movieData.movie.price_txt} movieurl={ movieData.movie.uid} />

                                </ButtonWrapper>

                    
                </DescriptionWrapper>
         
            </DetailWrapper>
        

        </DetailRow>

   
    </MovieDetailsWrapper>

    
        <ContentRow focusKey={'MENU-6'} title="Recommendation" movieArray={recome} />
   

  </Contentdiv>



 );
    };
const videoContentWithNavigation=withNavigation(VideoContent);
 export default withRouter(videoContentWithNavigation);
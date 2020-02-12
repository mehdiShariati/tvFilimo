import React from "react";
import {ContentRowWrapper,TitleWrapper,TitleText,ContentWrapper,HorizontalList} from "./content-row.styles";
import ContentItem from "../content-item/content-item.component";
import {Link} from "react-router-dom";


const ContentRow=({title,movieArray})=>{
console.log(movieArray);
return(
        <ContentRowWrapper>
                <TitleWrapper>
                <TitleText >
                    {title}
                </TitleText>

                </TitleWrapper>

               <ContentWrapper>
                <HorizontalList>

                {movieArray.map(item=>(<Link to={`/m/${item.uid}`} key={item.uid}><ContentItem key={item.uid} image={item.movie_img_b}  /></Link>))}


                </HorizontalList>



               </ContentWrapper>

            </ContentRowWrapper>

)};


export default ContentRow;
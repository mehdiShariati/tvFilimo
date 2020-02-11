import React from "react";
import {ContentRowWrapper,TitleWrapper,TitleText,ContentWrapper,HorizontalList} from "./content-row.styles";
import ContentItem from "../content-item/content-item.component";



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

                {movieArray.map(item=>(<ContentItem key={item.uid} image={item.movie_img_b}  />))}


                </HorizontalList>



               </ContentWrapper>

            </ContentRowWrapper>

)};


export default ContentRow;
import React from "react";
import {ContentRowWrapper,TitleWrapper,TitleText,ContentWrapper,HorizontalList} from "./content-row.styles";
import ContentItem from "../content-item/content-item.component";
import {Link,withRouter} from "react-router-dom";
import {locChange} from "../../redux/content/content.actions";
import {connect} from "react-redux";

const ContentRow=({title,movieArray,history,locaChange})=>{
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

                {movieArray.map(item=>(<a onClick={()=>{ locaChange(item.uid); history.push(`/m/${item.uid}`) }}  key={item.uid}><ContentItem key={item.uid} image={item.movie_img_b}  /></a>))}


                </HorizontalList>



               </ContentWrapper>

            </ContentRowWrapper>

)};
const mapDispatchToProps=dispatch=>({
    locaChange:(id)=>dispatch(locChange(id))
})

export default withRouter(connect(null,mapDispatchToProps)(ContentRow));
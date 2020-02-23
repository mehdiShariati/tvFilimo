import React from "react";
import {ContentRowWrapper,TitleWrapper,TitleText,ContentWrapper,HorizontalList} from "./content-row.styles";
import ContentItem from "../content-item/content-item.component";
import {Link,withRouter} from "react-router-dom";
import {locChange} from "../../redux/content/content.actions";
import {connect} from "react-redux";
import { withFocusable, withNavigation } from 'react-tv-navigation';


const ContentRow=({title,movieArray,history,locaChange,currentFocusPath})=>{

    const FsTyle={
        border:"4px solid orange",
        opacity:"0.2"

    };
return(
        <ContentRowWrapper>
            <TitleText >
                {title}
            </TitleText>
                <TitleWrapper>


                </TitleWrapper>

               <ContentWrapper>
                <HorizontalList>

                {movieArray.map((item,index)=>(<a onClick={()=>{ locaChange(item.uid); history.push(`/m/${item.uid}`) }}  key={item.uid}><ContentItem enTitle={item.movie_title_en} title={item.movie_title}  focusPath={item.uid+index+Math.random()} key={item.uid} image={item.movie_img_b}  /></a> )) }


                </HorizontalList>



               </ContentWrapper>

            </ContentRowWrapper>

)};
const mapDispatchToProps=dispatch=>({
    locaChange:(id)=>dispatch(locChange(id))
});
const ContetrowWithNavigation=withNavigation(ContentRow);
export default withRouter(connect(null,mapDispatchToProps)(ContetrowWithNavigation));
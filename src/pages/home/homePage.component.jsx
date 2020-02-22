import React from "react";
import {HomePageContainer,
    ListContainer,
    CategoryContainer,
    TitleWrapper,
    TitleName,
    ContentCategory,
    HorizontalListWrapper,


} from "./homePage.styles";
import TagNameButton from "../../components/tag-name-button/tag-name-button.component";
import { withNavigation } from 'react-tv-navigation';
import ContentRow from "../../components/content-row/content-row.component";

import {connect} from "react-redux";
const HomePage=({contents})=>{
   const dataaa=contents.list.list_data.filter((fil,index)=>index > 0);
   const tags=contents.list.list_data.filter((fil,index)=>index == 0);





return(




<HomePageContainer>
    <div>
    <ListContainer>
    <CategoryContainer>
        <TitleWrapper>
            <TitleName>دسته بندی ها</TitleName>
        </TitleWrapper>
        <ContentCategory>

        <HorizontalListWrapper classname="tag-wrapper">
{tags[0].data.map((item,index)=>( <TagNameButton title={item.title} focusPath={item.title+index} key={item.item_id} />))}

        </HorizontalListWrapper>


        </ContentCategory>

    </CategoryContainer>


    </ListContainer>

    </div>

    {dataaa.map(item=>(<ContentRow key={item.info.unique_id} title={item.info.title} movieArray={item.data} />))}
   




</HomePageContainer>



)
}
const mapStateToProps=state=>({
    contents:state.contents.content
})
const homPagewithNavigation=withNavigation(HomePage);
export default connect(mapStateToProps,null)(homPagewithNavigation);
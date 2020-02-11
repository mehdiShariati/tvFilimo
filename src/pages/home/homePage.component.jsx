import React from "react";
import {HomePageContainer,
    ListContainer,
    CategoryContainer,
    TitleWrapper,
    TitleName,
    ContentCategory,
    HorizontalListWrapper,
    TagnameButton,

} from "./homePage.styles";


import ContentRow from "../../components/content-row/content-row.component";

import {connect} from "react-redux";
const HomePage=({contents})=>{
   const dataaa=contents.list.list_data.filter((fil,index)=>index > 0);
   const tags=contents.list.list_data.filter((fil,index)=>index == 0);

    console.log({tags});



return(




<HomePageContainer>
    <div>
    <ListContainer>
    <CategoryContainer>
        <TitleWrapper>
            <TitleName>دسته بندی ها</TitleName>
        </TitleWrapper>
        <ContentCategory>

        <HorizontalListWrapper>
{tags[0].data.map(item=>( <TagnameButton key={item.item_id}>{item.title}</TagnameButton>))}
           
        


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

export default connect(mapStateToProps,null)(HomePage);
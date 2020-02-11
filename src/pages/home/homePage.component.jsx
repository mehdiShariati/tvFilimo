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
import {connect} from "react-redux";
const HomePage=({contents})=>{
    const dataaa=contents.list.list_data.filter(fil=>fil.data !== null).filter(fil=>{return fil.info.title});
    console.log({dataaa});



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

            <TagnameButton>تست ۱</TagnameButton>
            <TagnameButton>تست ۱</TagnameButton>
            <TagnameButton>تست ۱</TagnameButton>
            <TagnameButton>تست ۱</TagnameButton>
            <TagnameButton>تست ۱</TagnameButton>
            <TagnameButton>تست ۱</TagnameButton>


        </HorizontalListWrapper>


        </ContentCategory>

    </CategoryContainer>


    </ListContainer>

    </div>


</HomePageContainer>



)
}
const mapStateToProps=state=>({
    contents:state.contents.content
})

export default connect(mapStateToProps,null)(HomePage);
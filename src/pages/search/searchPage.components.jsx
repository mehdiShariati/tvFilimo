import React,{useState} from "react";
import {SearchWrapper,
    SearchBoxWrapper,
    SearchForm,
    SearchInput,
    SearchButton,
} from "./searchPage.style";
import KeyboardWrapper from "../../components/onScreenKeybord/key-borad-wrapper/key-board-wrapper.component";
import ContentRow from "../../components/content-row/content-row.component";
import {connect} from "react-redux";
import {fetchSearchStart} from "../../redux/search/search.actions";
import { withFocusable,withNavigation } from 'react-tv-navigation';

const Sbtn=({fun})=>(
    <SearchButton onClick={fun} >
        <i style={{color:"white"}} className="fa fa-search" />
    </SearchButton>
);

const SearchButtonWithFocus=withFocusable(Sbtn);
const SearchPage=({SearchData,content,searchInput})=>{
    const Numbers=[1,2,3,4,5,6,7,8,9,0];
    const Eng=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const Persian=['ا','ب','پ','ت','ث','ج','چ','ه','خ','د','ذ','ر','ز','ژ','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ک','گ',
        'ل','م','ن','و','ه','ی'];


        const OnSubmitSearch=(event)=>{
        event.preventDefault();

        if(searchInput.length > 2){
            SearchData(encodeURI(searchInput));
        }

        };




    return(
        <SearchWrapper>
        <SearchBoxWrapper>
            <SearchForm>
                <SearchInput value={searchInput} disabled  placeholder="جستجو ..." />
            </SearchForm>
          <SearchButtonWithFocus focusPath="SearchButtonAction" fun={OnSubmitSearch} />
        </SearchBoxWrapper>
        <KeyboardWrapper List={Persian} />
            <KeyboardWrapper List={Eng.reverse()} />
            <KeyboardWrapper List={Numbers.reverse()} />
            {content ? (<ContentRow movieArray={content} />) : ""}

        </SearchWrapper>

    )
};

const mapDispatchToProps=dispatch=>({
    SearchData:(text)=>dispatch(fetchSearchStart(text)),

});

const mapStateToProps=state=>({
   content:state.search.searchContent,
    searchInput:state.search.searchField

});
const searchPageWithNavigation=withNavigation(SearchPage);
export default  connect(mapStateToProps,mapDispatchToProps)(searchPageWithNavigation);
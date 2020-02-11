import Styled from "styled-components";
import styled from "styled-components";


export const HomePageContainer=styled.div`

width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 8rem 4rem 0px 0px;
  
    margin: 0px;

`;

export const ListContainer=styled.div`
margin-top: 0px;
transition-duration: 0.2s;


`;

export const CategoryContainer=styled.div`
    width: 100%;
    z-index: 2;
    opacity: 1;
    float: right;
`;

export const TitleWrapper=styled.div`
position: relative;
`;

export const TitleName=Styled.h3`

color: rgb(255, 255, 255);
    font-size: 2.2rem;
    position: relative;
    float: right;
    margin: 1.6rem 0px;
`;
export const ContentCategory=Styled.div`
white-space: nowrap;
    font-size: 0px;
    float: right;
    clear: both;
    margin-bottom: 2rem;

`;
export const HorizontalListWrapper=Styled.div`
transition: all 0.15s ease 0s;

`;

export const TagnameButton=Styled.button`

    margin-right: 0px;
    display: inline-block;
    width: 16rem;
    height: 7rem;
    font-size: 1rem;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    margin: 1.4rem 1rem;
    overflow: hidden;
    background: rgb(255, 255, 255);
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 0.3rem;


`;
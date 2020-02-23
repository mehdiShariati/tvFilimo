import styled from "styled-components";
import {Link} from "react-router-dom";



export const HeaderWrapper=styled.div`
width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;
    padding: 1rem 0px;
    background-color:rgb(38, 38, 38);
    border-top: 0.3rem solid rgb(253, 193, 60);
    height:2.2rem;

`;

export const NavigationButtons=styled(Link)`

    width: 5rem;
    height: 5rem;
    text-align: center;
    display: inline-block;
    float: right;
    cursor: pointer;
    box-sizing: border-box;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 4rem;
    overflow: hidden;
    margin: 0px 0.8rem;
    background: rgba(255, 255, 255, 0.4);
    outline: none;
    padding: 0px;

`;

export const ActionButtons=styled.button`
width: 5rem;
    height: 5rem;
    text-align: center;
    display: inline-block;
    float: right;
    cursor: pointer;
    box-sizing: border-box;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 4rem;
    overflow: hidden;
    margin: 0px 0.8rem;
    background: rgba(255, 255, 255, 0.4);
    outline: none;
    padding: 0px;
    :focus{
    border:4px solid orange;
    }

`;

export const NavbarLeftActionsContainers=styled.div`
float: right;
    margin: auto auto auto 3rem;

`;

export const LogoContainer=styled(Link)`

`;

export const Logo=styled.img`
width: 11rem;
margin-right: 2rem;
float: right;

`;

export const HeaderActions=styled.div`
float: left;

`;
export const Bawsome=styled.i`

color: rgb(255, 255, 255);
  font-size: 1.7rem;

  line-height: 0;
`;
export const ProfileWrapper=styled.div`
float: left;
    position: relative;
    margin-left: 10rem;
`;

export const ProfileTextWrapper=styled.div`
float: right;

`;
export const ProfileUserName=styled.h5`
color: rgb(255, 255, 255);
    line-height: 0;
    font-weight: 200;
    font-size: 2.5rem;
    margin: 1.5rem 0px 1rem;
`;
export const ProfileRemainDays=styled.span`

color: rgb(241, 216, 48);
    font-size: 1.6rem;
    display: block;
    margin-top: 0px;
    text-align: right;
`;

export const ButtonProfileImage=styled.button`
float: left;
    position: absolute;
    top: 0px;
    left: -7rem;
    width: 5rem;
    height: 5rem;
    text-align: center;
    display: inline-block;
    float: right;
    cursor: pointer;
    box-sizing: border-box;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 4rem;
    overflow: hidden;
    margin: 0px 0.8rem;
    background: rgba(255, 255, 255, 0.4);
    outline: none;
    padding: 0px;
    :focus{
    border:4px solid orange;
    }

`;

export const ImgProfile=styled.img`
width: 100%;
    height: 100%;
`;
import styled from "styled-components";
import {Link} from "react-router-dom";



export const HeaderWrapper=styled.div`
width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    padding: 2rem 0px;
    border-top: 0.3rem solid rgb(253, 193, 60);

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
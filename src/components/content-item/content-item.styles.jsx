import styled from "styled-components";


export const ItemWrapper=styled.div`

white-space: normal;
display: inline-block;
font-size: 1.2rem;
margin-right: 0.6rem;
cursor: pointer;
box-sizing: border-box;
position: relative;
width: 18rem;
height: 23rem;
padding: 0px;
overflow: hidden;
border-width: 0.45rem;
border-style: solid;
border-color: transparent;
border-image: initial;

.titleHidden h5 {
text-align: center;
    color: rgb(255, 255, 255);
    font-size: 2.5rem;
    line-height: 3rem;
    margin: 2rem 1rem 1rem;
    z-index:200;
   
    }
.titleHidden{
position:absolute;
z-index:300;
background:rgba(0,0,0,0.8);
display:none;
width:100%;
height: 100%;
}

:focus{
.titleHidden{
    display:inline-block;

  
}

border:6px solid orange;
}

`;

export const ImgMovie=styled.img`
    line-height: 0;
    position: relative;
    width: 100%;
    height: 26rem;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.4);
    margin: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;

`;

export const EntitleWrapper=styled.p`
text-align: center;
    color: rgb(253, 193, 60);
    font-size: 2rem;
    line-height: 2rem;
    margin: 1rem;

`;
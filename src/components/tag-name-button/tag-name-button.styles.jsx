import Styled from "styled-components";
export const TagNameBtn=Styled.button`

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
    
    :focus{
        background-color:orange;
        color:white;
        .tag-wrapper{
            margin-right:-35px;
        }
    }


`;
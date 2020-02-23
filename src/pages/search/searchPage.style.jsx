import Styled from "styled-components";


export const SearchWrapper=Styled.div`
padding: 4rem 0px 0px;

`;

export const SearchBoxWrapper=Styled.div`
width: 35rem;
    height: 5rem;
    color: rgb(2, 1, 0);
    background: rgba(255, 255, 255, 0.4);
    border-radius: 5rem;
    margin: 2.5rem auto 2rem;

`;

export const SearchForm=Styled.form`

display: block;
    margin-top: 0em;
`;

export const SearchInput=Styled.input`
float: right;
    font-size: 2.5rem;
    height: 3.9rem;
    width: calc(100% - 10rem);
    color: rgb(255, 255, 255);
    margin: 0.4rem 2rem;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: transparent;
    color:white;
        ::placeholder { 
      color: white;
      opacity:1;
      
    }
`;

export const SearchButton=Styled.button`
height: 5rem;
    width: 5rem;
    text-align: center;
    float: left;
    cursor: pointer;
    background: transparent;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 5rem;
    outline: none;
    padding: 0px;
    margin: 0px;
    color:white;
    border:4px solid white;
    :focus{
    border:4px solid orange;
    }

`;
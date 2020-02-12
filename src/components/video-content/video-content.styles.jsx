import styled from "styled-components";
export const Contentdiv=styled.div`
overflow: hidden;
`;

export const MovieDetailsWrapper=styled.div``;

export const DetailRow=styled.div`

position: relative;
    overflow: hidden;
    transition: all 0.2s ease 0s;
`;

export const ImgaeMovie=styled.img`
float: right;
    background-size: cover;
    width: 15rem;
    height: 20rem;
    margin: 2rem 0px 0px 2rem;
    background-repeat: no-repeat;
    background-position: center center;
    display:block;

`;
export const DetailWrapper=styled.div`


width: calc(100% - 17rem);
    float: right;
    `;

    export const MovieTitleFarsi=styled.h3`
    color: rgb(255, 255, 255);
    font-size: 2.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 2rem);
    line-height: 3rem;
    margin: 1.5rem 0px 1rem;
    overflow: hidden;
    
    `;

    export const MovieTitleEng=styled.h3`
    color: rgb(253, 193, 60);
    font-size: 1.7rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 2rem);
    margin: 1rem 0px;
    overflow: hidden;
    
    `;

    export const DescriptionWrapper=styled.div`
    height: 100%;
    direction: rtl;
    font-family: IRANSans, sans-serif, serif;
    font-weight: normal;
    padding: 0px;
    margin: 0px;
    background: rgb(38, 38, 38);
    overflow: hidden;
    
    `;

    export const Descriptionparagraph=styled.p`
    color: rgb(255, 255, 255);
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 2rem);
    margin: 0px;
    overflow: hidden;
    
    `;

    export const MovieDetailSpan=styled.span`
    position: relative;
    float: right;
    font-size: 1.7rem;
    margin: 0px 1.5rem;
    
    `;


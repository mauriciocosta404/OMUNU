import styled from "styled-components";

export const Container=styled.div`

`;

export const Header=styled.header`
    display: flex;
    justify-content: space-between;
    max-height: 3rem;
`

export const Title=styled.h2`
    color:#385A64;
`;

export const Content=styled.div`
    display:flex;
    align-items: center;
    border: 1px solid #CFCECE;
    border-radius: 1rem;
    
`;

export const BollTopContainer=styled.div`
    position: relative;
    bottom: 7rem;left:7rem;
    background-color: #FFC704;
    width: 30rem; height: 30rem;
    border-radius: 50%;
`;

export const BollBottomContainer=styled.div`
    position: relative;
    top: 1rem;right:7rem;
    width: 30rem; height: 30rem;
    border-radius: 50%;
    background-color: #385A64;
`;

export const Description=styled.p`
    color:#385A64;
`;
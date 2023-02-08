import styled from "styled-components";

export const Container=styled.div`

`;

export const Header=styled.header`
    display: flex;
    justify-content: space-between;
    max-height: 3rem;
`

export const Title=styled.h2`
    font-size: 3rem;
    color:#385A64;
`;

export const Content=styled.div`
    position: absolute;
    top:50%;left:50%;
    transform: translate(-50%,-50%);
    display:flex;
    align-items: center;
    border: 1px solid #CFCECE;
    border-radius: 1rem;
    width: 60rem;height: 25rem;
    padding: 2rem;
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
    top: 20rem;right:7rem;
    width: 30rem; height: 30rem;
    border-radius: 50%;
    background-color: #385A64;
`;

export const Description=styled.p`
    color:#385A64;
    font-size: 1.5rem;
    text-align: justify;
`;
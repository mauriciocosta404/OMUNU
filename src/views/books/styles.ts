import styled from "styled-components"

export const Container=styled.div`

`;

export const Wrapper=styled.div`
    display: flex;
    `;

export const BooksContainer=styled.div`
    h2{
        margin:3rem 0;
        color:#385A64;
    }
`;

export const Books=styled.div`
    max-width: 50rem;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    gap:1rem;
`;


export const BollTopContainer=styled.div`
    background-color: #FFC704;
    position: relative;
    top: 25rem;right:4rem;
    width: 20rem; height: 20rem;
    border-radius: 50%;
`;

export const BollBottomContainer=styled(BollTopContainer)`
    background-color: #385A64;
    left:4rem;
`;
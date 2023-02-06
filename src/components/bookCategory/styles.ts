import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    gap:1rem;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    box-shadow:0 .5rem 1.5rem rgba(0,0,0,0.2);
    width: 15rem;
    max-width: 15rem;
    padding: 1rem;
    border-radius:.3rem;

    span{
        color: #385A64;
        font-size: 1.1rem;
        font-weight: bold;
    }
`;

export const IconContainer=styled.div`
    color:#FFC704;
    font-size: 2rem;
`;
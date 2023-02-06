import styled from "styled-components";

export const MainContainer=styled.div`
    max-height: 5rem;
    border-bottom: 1px solid #CFCFCF;
    padding: 1rem;
    color: #385A64;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LinksContainer=styled.nav`
    ul{
        display: flex;
        justify-content: center;
        align-self: center;
        gap: 3rem;
        a{
            color:#385A64 ;
            font-weight: bold;
            font-size: 1rem;
        }
    }
`;

export const AvatarInfo=styled.div`
    display  :flex ;
    align-items: center;
`;

export const SearchInputContainer=styled.div`
    padding: .5rem;
    border-radius: .5rem;
    background-color: #ccc;
    display: flex;
    align-items: center;
    gap: .5rem;
    width: 20rem;
    input{
        flex:1;
        background-color: transparent;
        border:none;
    }
`;

export const BollTopContainer=styled.div`
    position: relative;
    left: 5rem;top:5rem;
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #385A64;
    width: 30rem; height: 30rem;
    border-radius: 50%;

    h1{
        color: #FFF;
        font-size: 3rem;
    }
    p{
        color: #C8C8C8;
        font-size: 1.1rem;
        max-width: 20rem;
    }
    h2{
        color: #C8C8C8;
        font-size: 2rem;
    }
`;

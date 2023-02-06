import styled from "styled-components";

interface ButtonProps{
    color:string
}

export const MainContainer =styled.div`
    padding-left:7rem ;
`;

export const Container = styled.div`
    max-width: 40rem;
    display: flex;
    flex-direction: column;
`;

export const ButtonsContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Button = styled.button`
    color:#fff;
    background-color: ${({color}:ButtonProps)=>color};
    padding: 1rem;
    border-radius: 1rem;
    width: 10rem;
`; 

export const BollTopContainer=styled.div`
    position: absolute;
    bottom:18rem;left: 60rem;
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


export const BollBottomContainer=styled.div`
    position: absolute;
    left:70rem;top: 15rem;
    background-color: #FFC801;
    width: 30rem; height: 30rem;
    border-radius: 50%;
`;

export const Footer=styled.footer`
    width: 100vw;
    text-align: center;
`;
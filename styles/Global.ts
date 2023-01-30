import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    *{
        margin: 0; padding:0;
        box-sizing: border-box;
        text-decoration: none;
        transition: all .5s linear;
        outline: none;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    ul{
        list-style-type: none;
    }
    body{
        font-size: 93.5%;
        overflow: hidden;
    }
    button{
        cursor: pointer;
        border: none;
    }

    @media (max-width:768px){
        html{
            font-size: 80.6%;
        } 
    }
`;
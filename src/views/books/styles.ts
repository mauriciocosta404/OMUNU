import styled from "styled-components"

export const Container=styled.div`

`;

export const Books=styled.div`
    max-width: 50rem;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    gap:2rem;
`;
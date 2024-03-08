import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 55px auto 55px;
    grid-template-areas:
    "header header"
    "cotent content"
    "footer footer"   
`;

export const Header = styled.header`
    grid-area: header;
    display: flex;
`;

export const Content = styled.div`
 grid-area: content;
`;

export const Footer = styled.div`
    grid-area: footer;
    border-bottom: none
    
    
`;




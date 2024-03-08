import styled from 'styled-components';

export const Container = styled.footer`
    grid-area: footer;
    height: 55px;
    width: 100%;
    padding: 10px 30px 10px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.FONT};
    font-size: 20px;

    border-top: 0.1px solid;


    a {
        color: ${({ theme }) => theme.COLORS.FONT};
        text-decoration: none;
    }

    a:hover {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    img {
        height: 25px;
        width: 25px;
    }

    .menu a {
        padding: 20px;
    }
`;
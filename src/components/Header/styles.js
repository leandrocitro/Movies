import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    height: 85px;
    width: 100%;
    padding: 10px 30px 10px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.FONT};
    font-size: 20px;

    border-bottom: 1px solid;


    a {
        color: ${({ theme }) => theme.COLORS.FONT};
        text-decoration: none;
    }

    a:hover {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    .menu a {
        padding: 20px;
    }
`;
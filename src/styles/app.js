import styled from 'styled-components';

export const BoxList = styled.ul`
    margin-top: 20px;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;

        & + li {
            margin-top: 15px;
        }
    }

`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
`;
import styled from '@emotion/styled';

export const BackBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    margin-top: 60px;
`;

export const BackBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: #49d84d;
    color: white;
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 22px;
    cursor: pointer;
    border-radius: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

    &:hover{
        background-color: #45a049;
    };

    &:focus {
        outline: none;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    };
`;

export const TextNotFound = styled.p`
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #b31bb4;
`;
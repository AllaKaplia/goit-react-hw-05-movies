import styled from '@emotion/styled';

export const ContainerBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
    margin-bottom: 20px;
`;

export const GoBack = styled.button`
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

export const Detailed = styled.h2`
    font-size: 32px;
    color: #315831;
`;
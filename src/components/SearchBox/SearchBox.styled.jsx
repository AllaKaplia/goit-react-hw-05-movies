import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const BoxForm = styled(Form)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`;

export const Input = styled(Field)`
    padding: 10px;
    width: 300px;
    border: 2px solid transparent;
    border-radius: 5px;
    font-size: 20px;
    color: #1f551f;
    border-radius: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    &:hover, &:focus {
        border: 2px solid transparent; 
    }
`;

export const BtnSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
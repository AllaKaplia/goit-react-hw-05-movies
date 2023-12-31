import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content:  flex-start;
    gap: 160px;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 20px;
    color: #fff;
    background-color: #ed9229;;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLogo = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #fff;
`;

export const LogoText = styled.span`
    font-size: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

    &:hover, &:focus {
       color: #b31bb4;
    };
`;

export const LogoIcon = styled.span`
    &:hover, &:focus {
       color: #b31bb4;
    };
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

export const BoxNav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    margin-right: 40px;
    list-style-type: none;
`;

export const LinkButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    background-color: #f19e26;
    color: white;
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 22px;
    cursor: pointer;
    border-radius: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    
    &:hover{
        background-color: #f68943;
    };

    &:focus {
        outline: none;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    };
`;

export const Container = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    
    @media screen and (min-width: 480px) {
        width: 396px;
        margin: 0 auto;
    }
    
    @media screen and (min-width: 768px) {
        width: 738px;
    }
    
    @media screen and (min-width: 1200px) {
        width: 1440px;
    }
`;
import styled from '@emotion/styled';

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: calc(100vw - 48px);
    gap: 24px;
    margin: 0, auto;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
`;

export const CastItem = styled.li`
    margin-left: auto;
    margin-right: auto;
    max-width: 170px;

    &:not(:last-child) {
        margin-bottom: 72px;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0;
        flex-basis: calc((100% - 2*24px) / 3);
        &:not(:last-child) {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1200px) {
        margin-right: 0;
        margin-bottom: 0;
        flex-basis: calc((100% - 4*24px) / 5);

    }
`;

export const DetailsBox = styled.div`
    display: block;
    text-align: center;
    padding-top: 32px;
    padding-bottom: 32px;
    width: 170px;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 0px 0px 4px 4px;
    background-color: #f1e7bf;
`;

export const NameActor = styled.h3`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #b31bb4;
`;

export const Role = styled.h4`
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #b31bb4;
`;

export const Popular = styled.p`
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #b31bb4;
`;
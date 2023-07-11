import styled from '@emotion/styled';

export const GalleryMovies = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin: 0, auto;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
`;

export const MovieItem = styled.li`
    margin-left: auto;
    margin-right: auto;
    max-width: 220px;

    &:not(:last-child) {
        margin-bottom: 72px;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0;
        flex-basis: calc((100% - 1*24px) / 2);
        &:not(:last-child) {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1200px) {
        margin-right: 0;
        margin-bottom: 0;
        flex-basis: calc((100% - 3*24px) / 4);

    }
`;

export const ContainerDescription = styled.div`
    display: block;
    text-align: center;
    padding-top: 32px;
    padding-bottom: 32px;
    width: 220px;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 0px 0px 4px 4px;
    background-color: #bff1c2;
`;

export const OriginalTitle = styled.h3`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #135813;
`;

export const Language = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: #135813;
`;

export const Data = styled.p`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: #135813;
`;
import styled, { createGlobalStyle } from 'styled-components';

import { ITheme, TBrandPalette } from './Theme.types';

export const GlobalStyles = createGlobalStyle`
    html {
        @media (max-width :499px) {
            font-size:70%;
        }
        @media (min-width :500px) {
            font-size:75%;
        }
        @media (min-width :800px) {
            font-size:85%;
        }
        @media (min-width :1000px) {
            font-size:85%;
        }
        @media (min-width :1150px) {
            font-size:92.5%;
        }
        @media (min-width :1300px) {
            font-size:100%;
        }
        @media (min-width :1520px) {
            font-size:110%;
        }
        @media (min-width :1700px) {
            font-size:120%;
        }
    }

    body {
        background-color: ${({ theme }) =>
			theme?.components?.body?.backgroundColor?.[theme.name] ??
			theme?.components?.body?.backgroundColor ??
			'#FFFFFF'};
        color: ${({ theme }) =>
			theme?.components?.body?.fontColor?.[theme.name] ??
			theme?.components?.body?.fontColor ??
			'#333333'};
        font-size: ${({ theme }) =>
			theme?.components?.body?.fontSize ?? '0.875rem'};
        font-family: ${({ theme }) =>
			theme?.components?.body?.fontFamily ??
			"'Montserrat', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"};
        overflow-x: hidden;

        p {
            margin: 0px;
        }
    }
`;

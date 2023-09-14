import styled, { createGlobalStyle } from 'styled-components';

import { ITheme, TBrandPalette } from './Theme.types';

export const defaultPalette: TBrandPalette = {
	alert: '#C8001E',
	background: '#F5F5F5',
	highlight: '#46BEDC',
	low: '#FFB400',
	main: '#242A30',
	medium: '#FF7300',
	secondaryOne: '#A5A9AC',
	secondaryTwo: '#E7E8E9',
	success: '#6EA500',
	support: '#7094AA',
	tabBarCover: '#242A30',
	tabBarCoverTwo: '#FFFFFF',
	widgetsNegTexts: '#FFFFFF',
};

export const themeLight: ITheme = {
	name: 'light',
	colors: {
		fontColor: '#333333',
		inverseFontColor: '#FFFFFF',
		light: '#F3F3F5',
		dark: '#333333',
	},
	components: {
		body: {
			backgroundColor: '#F3F3F5',
		},
		content: {
			backgroundColor: '#FFFFFF',
		},
	},
};

export const themeDark: ITheme = {
	name: 'dark',
	colors: {
		fontColor: '#FFFFFF',
		inverseFontColor: '#333333',
		light: '#333333',
		dark: '#F3F3F5',
	},
	components: {
		body: {
			backgroundColor: '#0D1117',
		},
		content: {
			backgroundColor: '#242A30',
		},
	},
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) =>
			theme.components.body.backgroundColor};
        color: ${({ theme }) => theme.colors.fontColor};
        font-family: monospace;
        overflow-x: hidden;
    }
`;

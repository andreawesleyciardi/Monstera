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
		bodyBackground: '#F3F3F5',
		fontColor: '#333333',
		inverseFontColor: '#FFFFFF',
		widgetBackground: '#FFFFFF',
		light: '#F3F3F5',
		dark: '#333333',
	},
	components: {
		widget: {
			backgroundColor: '#FFFFFF',
		},
	},
};

export const themeDark: ITheme = {
	name: 'dark',
	colors: {
		bodyBackground: '#0D1117',
		fontColor: '#FFFFFF',
		inverseFontColor: '#333333',
		widgetBackground: '#242A30',
		light: '#333333',
		dark: '#F3F3F5',
	},
	components: {
		widget: {
			backgroundColor: '#242A30',
		},
	},
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.bodyBackground};
        color: ${({ theme }) => theme.colors.fontColor};
        font-family: monospace;
        overflow-x: hidden;
    }
`;

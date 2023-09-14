import { TThemeContent, TThemeWidget } from './../../components';

// Brand

export type TBrandPalette = {
	alert: string;
	background: string;
	highlight: string;
	low: string;
	main: string;
	medium: string;
	secondaryOne: string;
	secondaryTwo: string;
	success: string;
	support: string;
	tabBarCover: string;
	tabBarCoverTwo: string;
	widgetsNegTexts: string;
};

export type TBrandVariants = {
	danger: string;
	info: string;
	low: string;
	primary: string;
	secondary: string;
	success: string;
	warning: string;
};

export type TBrandColors = {
	bars: string;
	interactive: string;
};

type TBrandColorsGroups = {
	palette: TBrandPalette;
	variants: TBrandVariants;
};

type TBrandSafemiles = {
	name: string;
};

export type TBrand = {
	colors: TBrandColors;
	logo?: string | { [key: string]: string };
	logosRootUrl?: string;
	safeMiles?: TBrandSafemiles;
	[key: string]: any;
};

export interface IBrand {
	colors: TBrandColorsGroups;
	brand: TBrand;
	isBranded: boolean;
}

// Theme

export type TThemeName = 'light' | 'dark';

export type TThemeColors = {
	dark: string;
	fontColor: string;
	inverseFontColor: string;
	light: string;
};

export type TThemeComponents = {
	body?: {
		backgroundColor: string;
	};
	content?: TThemeContent;
	widget?: TThemeWidget;
};

export interface ITheme {
	name: TThemeName;
	colors: TThemeColors;
	components: TThemeComponents;
}

// Branded Theme

export type IBrandedThemeColors = TBrandColorsGroups & TThemeColors;

export type TBrandedTheme = ITheme & IBrand;

export type TThemeContext = {
	setBrand: (selectedBrand: IBrand) => void;
	setTheme: (themeKey: TThemeName) => void;
	brandedTheme: TBrandedTheme | null;
};

export type TThemeProvider = {
	children: React.ReactNode;
	customBrand?: IBrand;
};

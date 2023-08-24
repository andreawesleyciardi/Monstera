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
	brand: TBrandColors;
	palette: TBrandPalette;
	variants: TBrandVariants;
};

type TBrandSafemiles = {
	name: string;
};

export interface IBrand {
	colors: TBrandColorsGroups;
	logo: string;
	safeMiles: TBrandSafemiles;
	isBranded: boolean;
}

// Theme

export type TThemeName = 'light' | 'dark';

export type TThemeColors = {
	bodyBackground: string;
	dark: string;
	fontColor: string;
	inverseFontColor: string;
	light: string;
	widgetBackground: string;
};

export interface ITheme {
	name: TThemeName;
	colors: TThemeColors;
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

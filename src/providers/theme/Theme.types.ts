import { IPalette } from '../../utilities/Types';

export interface IVariants {
	danger: string;
	info: string;
	low: string;
	primary: string;
	secondary: string;
	success: string;
	warning: string;
}

// Brand

export interface IBrandColors {
	bars: string;
	interactive: string;
}

export interface IBrand {
	colors: {
		brand: IBrandColors;
		palette: IPalette;
		variants: IVariants;
	};
	logo: string;
	isBranded: boolean;
}

// Theme

export type TThemeName = 'light' | 'dark';

export interface IThemeColors {
	bodyBackground: string;
	dark: string;
	fontColor: string;
	inverseFontColor: string;
	light: string;
	widgetBackground: string;
}

export interface ITheme {
	name: TThemeName;
	colors: IThemeColors;
}

// Branded Theme

export interface IBrandedThemeColors extends IThemeColors {
	brand: IBrand;
	palette: IPalette;
}

export type TBrandedTheme = IBrand & ITheme;

export type TThemeContext = {
	setBrand: (selectedBrand: IBrand) => void;
	setTheme: (themeKey: TThemeName) => void;
	brandedTheme: TBrandedTheme | null;
};

export type TThemeProvider = {
	children: any;
	customBrand?: IBrand;
};

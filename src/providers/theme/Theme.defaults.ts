import {
	IBrand,
	ITheme,
	TBrandPalette,
	TBrandVariants,
	TComponents,
} from './Theme.types';

// Palette

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

// Themes

export const themeLight: ITheme = {
	name: 'light',
	colors: {
		inverseFontColor: '#FFFFFF',
		light: '#F3F3F5',
		dark: '#333333',
	},
};

export const themeDark: ITheme = {
	name: 'dark',
	colors: {
		inverseFontColor: '#333333',
		light: '#333333',
		dark: '#F3F3F5',
	},
};

// Brand

export const paletteToVariants = (palette: TBrandPalette) => {
	return {
		danger: palette.alert,
		info: palette.support,
		low: palette.low,
		primary: palette.highlight,
		secondary: palette.secondaryTwo,
		success: palette.success,
		warning: palette.medium,
	};
};

const defaultVariants: TBrandVariants = paletteToVariants(defaultPalette);

export const defaultBrand: IBrand = {
	colors: {
		palette: defaultPalette,
		variants: defaultVariants,
	},
	brand: {
		colors: {
			bars: '#242A30',
			interactive: '#46BEDC',
		},
		logo: { main: 'web_mobile_logo.png' },
		logosRootUrl: 'https://dev-o7drivers.oseven.io/branding/oseven/',
		safeMiles: { name: 'SafeMiles' },
	},
	isBranded: false,
};

// Components

export const defaultComponents: TComponents = {
	body: {
		backgroundColor: { light: '#F3F3F5', dark: '#0D1117' },
		fontColor: { light: '#333333', dark: '#FFFFFF' },
		// fontFamily?: string;
		// fontSize?: string;
	},
	content: {
		backgroundColor: { light: '#FFFFFF', dark: '#242A30' },
	},
};

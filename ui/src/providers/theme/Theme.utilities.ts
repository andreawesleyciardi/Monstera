import {
	createTheme,
	// GlobalStyles as MuiGlobalStyles,
	Theme as MuiTheme,
	ThemeOptions as MuiThemeOptions,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { PaletteMode as MuiPaletteMode } from '@mui/material';
import _ from 'lodash';

import {
	TBrand,
	TBrandDefinition,
	TColor,
	TColorDefinition,
	TComponents,
	TComponentsDefinition,
	// TMuiCreateThemeProps,
	TPalette,
	TPaletteDefinition,
	// TTheme,
	TThemeContext,
	TThemeProviderProps,
} from './Theme.types';
import {
	defaultBrand,
	defaultPalette,
	defaultComponents,
	componentsMap,
} from './Theme.defaults';

const parsePalette = function (
	palette: { [key: string]: TColorDefinition } | undefined
): { [key: string]: TColor } {
	if (palette == undefined) {
		return {};
	}
	let parsedPalette: { [key: string]: TColor } = {};
	for (const key in palette) {
		parsedPalette[key] = (
			typeof palette[key] === 'string'
				? { main: palette[key] }
				: palette[key]
		) as TColor;
	}
	return parsedPalette;
};

const parseBrandParams = function (brand: any) {
	if (typeof brand?.logo === 'string') {
		brand.logo = { main: brand?.logo };
	}
	return brand;
};

const parseBrand = function ({ palette, ...brand }: TBrandDefinition): TBrand {
	let parsedBrandPalette = parsePalette(palette);
	let parsedBrandParams = parseBrandParams(brand);
	return _.merge(
		{},
		Object.keys(parsedBrandPalette).length > 0
			? { palette: parsedBrandPalette }
			: {},
		parsedBrandParams != null && Object.keys(parsedBrandParams).length > 0
			? { brand: parsedBrandParams }
			: {}
	);
};

const parseComponents = function (
	components: TComponentsDefinition
): TComponents {
	let parsedComponents: TComponentsDefinition = {};
	Object.keys(components).forEach((key) => {
		parsedComponents[componentsMap[key] ?? key] = components[key];
	});

	return parsedComponents;
};

export const createPaletteTheme = function (
	palette: TPaletteDefinition,
	basePalette: TPaletteDefinition,
	mode: MuiPaletteMode
): MuiThemeOptions {
	const paletteTheme: TPalette = parsePalette(
		_.merge({}, basePalette ?? {}, palette)
	);
	return { palette: _.merge({}, paletteTheme, { mode: mode }) };
};

export const createBrandedTheme = function (
	brand: TBrandDefinition,
	baseBrand: TBrandDefinition
): MuiThemeOptions {
	// debugger;
	const brandedTheme: TBrand = parseBrand(_.merge({}, baseBrand, brand));
	return brandedTheme;
};

export const createComponentsTheme = function (
	components: TComponentsDefinition,
	baseComponents?: TComponentsDefinition
): MuiThemeOptions {
	const componentsTheme: TComponents = parseComponents(
		_.merge({}, baseComponents ?? {}, components)
	);
	return { components: componentsTheme };
};

export const getCustomValue = function (
	customLight: any,
	customDark: any,
	mode: MuiPaletteMode,
	modeIsToggable: boolean
) {
	return modeIsToggable === true
		? _.merge({}, customLight, mode === 'dark' ? customDark : {})
		: mode === 'light'
		? { ...customLight }
		: { ...customDark };
};

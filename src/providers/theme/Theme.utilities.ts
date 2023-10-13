import {
	createTheme,
	// GlobalStyles as MuiGlobalStyles,
	Theme as MuiTheme,
	ThemeOptions as MuiThemeOptions,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
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

const parseBrand = function ({ palette, ...brand }: TBrandDefinition): TBrand {
	let parsedBrandPalette = parsePalette(palette);
	return _.merge(
		{},
		Object.keys(parsedBrandPalette).length > 0
			? { palette: parsedBrandPalette }
			: {},
		brand != null && Object.keys(brand).length > 0 ? { brand: brand } : {}
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

export const createBrandedTheme = function (
	brand: TBrandDefinition,
	baseBrand: TBrandDefinition
): MuiThemeOptions {
	const brandedTheme: TBrand = parseBrand(_.merge({}, baseBrand, brand));
	return brandedTheme;
};

export const createPaletteTheme = function (
	palette: TPaletteDefinition,
	basePalette: TPaletteDefinition
): MuiThemeOptions {
	const paletteTheme: TPalette = parsePalette(
		_.merge({}, basePalette ?? {}, palette)
	);
	return { palette: paletteTheme };
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

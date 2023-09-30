import React, { useContext, useEffect, useState } from 'react';
import { createTheme, Theme } from '@mui/material/styles';
import _ from 'lodash';

import {
	TBrand,
	TBrandColors,
	TBrandDefinition,
	TColor,
	TColorDefinition,
	TMuiCreateThemeProps,
	TPalette,
	TPaletteDefinition,
	TTheme,
	TThemeContext,
	TThemeProviderProps,
} from './Theme.types';
import {
	defaultBrand,
	defaultPalette,
	defaultComponents,
} from './Theme.defaults';

// Context

const ThemeContext = React.createContext<TThemeContext | null>(null);

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: purple[500],
// 		},
// 		secondary: {
// 			main: green[500],
// 		},
// 	},
// });

const createMuiTheme = (
	theme: TMuiCreateThemeProps,
	parentTheme?: Theme
): Theme => {
	return parentTheme != null && Object.keys(parentTheme).length > 0
		? createTheme(parentTheme, theme)
		: createTheme(theme);
};

const parseColors = function (
	colors: { [key: string]: TColorDefinition } | undefined
): { [key: string]: TColor } {
	if (colors == undefined) {
		return {};
	}
	let parsedColors: { [key: string]: TColor } = {};
	for (const key in colors) {
		parsedColors[key] = (
			typeof colors[key] === 'string'
				? { main: colors[key] }
				: colors[key]
		) as TColor;
	}
	return parsedColors;
};

const parseBrand = function ({ colors, ...brand }: TBrandDefinition): TBrand {
	let parsedColors = parseColors(colors);
	return _.merge(
		{},
		Object.keys(parsedColors).length > 0 ? { palette: parsedColors } : {},
		brand != null && Object.keys(brand).length > 0 ? { brand: brand } : {}
	);
};

const createBrandedTheme = function (
	brand: TBrandDefinition,
	parentTheme?: Theme
): Theme {
	const brandedTheme: TBrand = parseBrand(_.merge({}, defaultBrand, brand));
	return createMuiTheme(brandedTheme, parentTheme);
};

const parsePalette = function (palette: TPaletteDefinition) {
	// TO DO
	return {};
};

const createPaletteTheme = function (
	palette: TPaletteDefinition,
	parentTheme?: Theme
): Theme {
	const paletteTheme: TPalette = parsePalette(
		_.merge({}, defaultPalette, palette)
	);
	return createMuiTheme({ palette: paletteTheme }, parentTheme);
};

// Provider

export const ThemeProvider: any = ({
	children,
	brand: userBrand,
	palette: userPalette,
	components: userComponents,
	...props
}: TThemeProviderProps) => {
	const [brand, setBrand] = useState(null);
	const [palette, setPalette] = useState(null);
	const [components, setComponents] = useState(null);

	// Read props
	useEffect(() => {
		const brandedTheme: Theme = createBrandedTheme(userBrand);
		const paletteTheme: Theme = createPaletteTheme(
			userPalette,
			brandedTheme
		);
	}, []);

	// if brand != null
	// Parse brand
	// color --> brand palette
	// with brand palette we use Theme composition so to customize the palette

	// logo, logosRootUrl, [any]: any --> Create muiTheme custom variables https://mui.com/material-ui/customization/theming/#custom-variables

	return children;
};

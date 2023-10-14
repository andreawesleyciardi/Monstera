import { ChipTheme } from './../../components';

import logo from './../../assets/logo.png';

import {
	TBrandDefinition,
	TColorsVariables,
	TComponentsDefinition,
	TPaletteDefinition,
} from './Theme.types';

export const defaultPalette: TPaletteDefinition = {
	primary: { main: '#46BEDC', contrastText: '#FFFFFF' },
	secondary: { main: '#A5A9AC', contrastText: '#FFFFFF' },
	error: { main: '#C8001E', contrastText: '#FFFFFF' },
	warning: { main: '#FF7300', contrastText: '#FFFFFF' },
	info: { main: '#7094AA', contrastText: '#FFFFFF' },
	success: { main: '#6EA500', contrastText: '#FFFFFF' },
};

export const defaultBrand: TBrandDefinition = {
	palette: {
		primary: defaultPalette.primary,
		secondary: defaultPalette.secondary,
	},
	logo: { main: logo },
	logosRootUrl: '',
};

export const defaultComponents: TComponentsDefinition = {
	...ChipTheme,
};

export const componentsMap: { [key: string]: string } = {
	Chip: 'MuiChip',
};

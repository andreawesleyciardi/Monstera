import { ChipTheme, InputTheme } from './../../components';

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
	borders: { main: '#E5E6E7', contrastText: '#000000' },
};

export const defaultBrand: TBrandDefinition = {
	palette: {
		primary: defaultPalette.primary,
		secondary: defaultPalette.secondary,
	},
	logo: { main: '' },
	logosRootUrl: '',
};

export const defaultComponents: TComponentsDefinition = {
	...ChipTheme,
	...InputTheme,
};

export const componentsMap: { [key: string]: string } = {
	Chip: 'MuiChip',
};

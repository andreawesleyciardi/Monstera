import { IPalette, TVariants } from './Types';

import { ITheme } from '../providers/theme/Theme.types';

export const getStyledColor = (theme: ITheme, variant: TVariants) => {
	if (['light', 'dark'].includes(variant) == true) {
		if (theme.name != variant) {
			return theme.name == 'dark'
				? theme.colors.fontColor
				: theme.colors.inverseFontColor;
		} else {
			return theme.name == 'dark'
				? theme.colors.inverseFontColor
				: theme.colors.fontColor;
		}
	}
	return theme.colors.inverseFontColor;
};

export const getStyledBackgroundColor = (theme: ITheme, variant: TVariants) => {
	return ['light', 'dark'].includes(variant) == true
		? theme.colors[variant]
		: theme.colors.variants[variant];
};

export const arrayVariants = [
	'light',
	'dark',
	'primary',
	'secondary',
	'success',
	'warning',
	'danger',
	'low',
	'info',
];

export const paletteToVariants = (palette: IPalette) => {
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

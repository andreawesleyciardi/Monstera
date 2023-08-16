import { DefaultTheme } from 'styled-components';
import { TVariants } from './Types';

import { ITheme } from '../providers/theme/Theme.types';

export const getStyledColor = (
	theme: ITheme | DefaultTheme,
	variant: TVariants
) => {
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

export const getStyledBackgroundColor = (
	theme: ITheme | DefaultTheme,
	variant: TVariants
) => {
	// debugger;
	return ['light', 'dark'].includes(variant) == true
		? theme.colors[variant]
		: theme.colors.variants[variant];
};

export const arrayVariants = [
	'danger',
	'dark',
	'info',
	'light',
	'low',
	'primary',
	'secondary',
	'success',
	'warning',
];

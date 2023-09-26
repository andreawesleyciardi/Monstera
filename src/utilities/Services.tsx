import { DefaultTheme } from 'styled-components';
import { TVariants } from './Types';

import { ITheme, TBrandedTheme } from '../providers/theme/Theme.types';

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
	theme: TBrandedTheme | DefaultTheme,
	variant: TVariants
) => {
	if (['light', 'dark'].includes(variant) == true) {
		return theme.colors[variant];
	}
	return (
		theme.brand?.colors?.[variant] ??
		theme.colors.variants[variant] ??
		theme.colors.variants.primary
	);
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

export const isValidEmail = (value: string | null) =>
	/^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))|((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+[;,]{1,1})$/.test(
		value != null ? value : ''
	);

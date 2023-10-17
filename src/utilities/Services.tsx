import { DefaultTheme } from 'styled-components';
import { TVariants } from './Types';

import {
	ITheme,
	TBrandedTheme,
	TMonsteraComponents,
	TStyledThemeProvider,
} from '../providers/theme/Theme.types';

export const getStyledColor = (
	theme: TStyledThemeProvider | DefaultTheme,
	variant: TVariants,
	reverse?: boolean
) => {
	if (['light', 'dark'].includes(variant) == true) {
		if (variant === theme.name) {
			return theme?.components?.body?.fontColor?.['light'];
		} else {
			return theme?.components?.body?.fontColor?.[
				theme.name === 'light'
					? 'dark'
					: variant == 'light'
					? 'dark'
					: 'light'
			];
		}
	}
	return theme?.components?.body?.fontColor?.[
		reverse === true
			? theme.name === 'light'
				? 'dark'
				: 'light'
			: theme.name
	];
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

import React from 'react';

// to fix the type for "children"
export type TProvider = {
	children: React.ReactElement;
};

export type TPositions =
	| 'left'
	| 'top-left'
	| 'top'
	| 'top-right'
	| 'right'
	| 'bottom-right'
	| 'bottom'
	| 'bottom-left';

export type TSizes = 'small' | 'medium' | 'large';

export type TVariants =
	| 'danger'
	| 'dark'
	| 'info'
	| 'light'
	| 'low'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning';

export enum EVariants {
	danger = 'danger',
	dark = 'dark',
	info = 'info',
	light = 'light',
	low = 'low',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
}

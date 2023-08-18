import React from 'react';

export type TCoords = {
	x: number;
	y: number;
};

export type TCssCoords = {
	x: string;
	y: string;
};

export type TPositions =
	| 'center'
	| 'left'
	| 'top-left'
	| 'top'
	| 'top-right'
	| 'right'
	| 'bottom-right'
	| 'bottom'
	| 'bottom-left';

export enum EPositions {
	'center' = 'center',
	'left' = 'left',
	'top-left' = 'top-left',
	'top' = 'top',
	'top-right' = 'top-right',
	'right' = 'right',
	'bottom-right' = 'bottom-right',
	'bottom' = 'bottom',
	'bottom-left' = 'bottom-left',
}

// to fix the type for "children"
export type TProvider = {
	children: React.ReactElement;
};

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

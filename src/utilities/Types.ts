import React from 'react';

export type TAlign = 'left' | 'center' | 'right';

export type TCoords = {
	x: number;
	y: number;
};

export type TCssCoords = {
	x: string;
	y: string;
};

export type TElement = (props: {
	[key: string]: any;
}) => React.JSX.Element | null;

export type TElementProps = { [key: string]: any } | null;

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
export type TFullSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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

export type TThemedValue =
	| { light: string | number; dark: string | number }
	| string;

export type TCoordinates = {
	lat: number;
	lng: number;
};

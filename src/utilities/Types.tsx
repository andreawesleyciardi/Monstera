import React from 'react';

// to fix the type for "children"
export type TProvider = {
	children: React.ReactElement;
};

export interface IPalette {
	alert: string;
	background: string;
	highlight: string;
	low: string;
	main: string;
	medium: string;
	secondaryOne: string;
	secondaryTwo: string;
	success: string;
	support: string;
	tabBarCover: string;
	tabBarCoverTwo: string;
	widgetsNegTexts: string;
}

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
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning';

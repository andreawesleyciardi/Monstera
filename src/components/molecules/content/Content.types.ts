import React from 'react';
import {
	TAlign,
	TElement,
	TElementProps,
	TVariants,
} from '../../../utilities/Types';

export type TContentVariants = TVariants | 'bars' | 'default';

export type TContent = {
	children: any;
};

export type TContentHeader = {
	align?: TAlign;
	children?: any;
	variant?: TContentVariants;
};

export type TStyledContentHeader = {
	$align: TAlign;
	$variant: TContentVariants;
};

export type TContentBody = {
	children: any;
};

export type TContentFooter = {
	children: any;
};

export type TThemeContent = {
	backgroundColor: string;
};

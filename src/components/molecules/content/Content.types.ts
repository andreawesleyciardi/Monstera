import React from 'react';
import { TChildren, TChildrenProps, TVariants } from '../../../utilities/Types';

export type TContentVariants = TVariants | 'bars' | 'default';

export type TContent = {
	children: any;
};

export type TContentHeader = {
	children: any;
	variant?: TContentVariants;
};

export type TStyledContentHeader = {
	$variant?: TContentVariants;
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

import React from 'react';
import { TVariants } from '../../../utilities/Types';

export type TContentVariants = TVariants | 'bars' | 'default';

export type TContentChildren = (props: object) => React.JSX.Element | null;

export type TContentChildrenProps = { [key: string]: any } | null;

export type TContent = {
	variant?: TContentVariants;
	children: TContentChildren;
	childrenProps: TContentChildrenProps;
};

export type TContentHeader = {
	children: any;
	variant?: TContentVariants;
};

export type TContentBody = {
	children: any;
};

export type TContentFooter = {
	children: any;
};

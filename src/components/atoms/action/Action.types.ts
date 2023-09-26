import { MouseEventHandler, KeyboardEvent } from 'react';

export type TAction = {
	children?: any;
	className?: string;
	event?: 'onClick' | 'onKeyDown' | 'all';
	icon: string;
	key: string;
	label?: string;
	labelInTooltip?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	onKeyDown?: KeyboardEvent<HTMLButtonElement>;
};

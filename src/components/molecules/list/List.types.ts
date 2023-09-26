import { MouseEventHandler, KeyboardEvent } from 'react';

import { TAction } from './../../atoms';

export type TList = {
	actions?: TAction[];
	counter?: number;
	data: any[];
	isEditable?: boolean;
	itemActions?: TAction[];
	title: string;
};

export type IStyledList = {};

import React from 'react';

import { TPositions, TVariants } from '../../../utilities/Types';

export type TAlertBase = {
	content?: React.FunctionComponent;
	close?: 'auto' | 'manual';
	description: string;
	duration?: number;
	hasClose?: boolean;
	title?: string;
	variant?: TVariants;
};

export type TAlert = TAlertBase & {
	id: string;
	onClose: (id: string) => void;
};

export interface IStyledAlert {
	$variant: TVariants;
}

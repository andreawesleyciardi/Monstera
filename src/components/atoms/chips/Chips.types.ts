import React, { MouseEvent } from 'react';

export type TChips = {
	onDelete?: (event: MouseEvent<HTMLButtonElement>, value: string) => void;
	value?: any[] | null;
};

export interface IStyledChips {}

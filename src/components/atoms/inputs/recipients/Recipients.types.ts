import React from 'react';
import { TChips } from '../../chips';

export type TRecipients = {
	className?: string;
	id?: string;
	maxItems?: number;
	name?: string;
	onChange: (value: string[] | null) => void;
	placeholder?: string;
	separator?: string;
	template?: React.FC<TChips>;
	value?: string[] | null;
};

export interface IStyledRecipients {}

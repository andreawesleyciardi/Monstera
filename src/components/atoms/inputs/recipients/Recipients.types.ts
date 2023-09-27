import React from 'react';
import { TChip } from '../../chip';

export type TRecipients = {
	className?: string;
	id?: string;
	maxItems?: number;
	name?: string;
	onChange: (value: string[] | null) => void;
	placeholder?: string;
	separator?: string;
	template?: React.FC<TChip>;
	value?: string[] | null;
};

export interface IStyledRecipients {}

import React from 'react';
import { TChip } from '../../chip';

export type TRecipients = {
	autoFocus: boolean;
	className?: string | null;
	blackList?: string[] | null;
	id?: string | null;
	// inputRef?: React.Ref<HTMLInputElement> | null;
	maxItems?: number;
	name?: string;
	onChange: (value: string[] | null) => void;
	placeholder?: string | null;
	separator?: string;
	template?: React.FC<TChip>;
	validation?: (recipient: string, value: string[] | null) => boolean;
	value?: string[] | null;
};

export interface IStyledRecipients {
	className?: string | null;
	id?: string | null;
}

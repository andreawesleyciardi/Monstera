import React from 'react';
import { ChipProps } from '@mui/material';

export type TChip = Omit<ChipProps, 'onClick'> & {
	label: string;
	onClick: (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		label: string
	) => void;
	onDelete?: (label: string) => void;
};

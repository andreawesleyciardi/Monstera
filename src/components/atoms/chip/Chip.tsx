import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Chip as MuiChip, ChipProps } from '@mui/material';

export const Chip = ({ onDelete, ...props }: ChipProps) => {
	return props.label != null && props.label !== '' ? (
		<MuiChip
			{...props}
			onDelete={
				onDelete != null ? () => onDelete(props.label) : undefined
			}
		/>
	) : null;
};

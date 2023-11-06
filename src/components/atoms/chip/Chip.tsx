import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Chip as MuiChip, ChipProps } from '@mui/material';

export const Chip = ({ onClick, onDelete, ...props }: ChipProps) => {
	return props.label != null && props.label !== '' ? (
		<MuiChip
			{...props}
			onClick={onClick != null ? () => onClick(props.label) : undefined}
			onDelete={
				onDelete != null ? () => onDelete(props.label) : undefined
			}
		/>
	) : null;
};

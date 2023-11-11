import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Chip as MuiChip, ChipProps } from '@mui/material';

import { TChip } from './Chip.types';

export const Chip = ({ onClick, onDelete, ...props }: TChip) => {
	return props.label != null && props.label !== '' ? (
		<MuiChip
			{...props}
			onClick={
				onClick != null
					? (e) => {
							onClick(e, props.label);
					  }
					: undefined
			}
			onDelete={
				onDelete != null ? () => onDelete(props.label) : undefined
			}
		/>
	) : null;
};

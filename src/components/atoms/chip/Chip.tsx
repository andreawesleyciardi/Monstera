import React from 'react';
import { Chip as MuiChip } from '@mui/material';

import { StyledChip } from './Chip.styles';
import { TChip } from './Chip.types';

export const Chip: React.FC<TChip> = React.memo(
	({ onDelete = null, value = null }) => {
		return (
			value !== null && (
				<MuiChip
					label={value}
					onDelete={
						onDelete !== null ? () => onDelete(value) : undefined
					}
				/>
			)
		);
	}
);

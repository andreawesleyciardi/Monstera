import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Chip as MuiChip } from '@mui/material';

import { chipTheme } from './Chip.styles';
import { TChip } from './Chip.types';

export const Chip: React.FC<TChip> = React.memo(
	({ onDelete = null, value = null }) => {
		return (
			<ThemeProvider theme={chipTheme}>
				{value !== null && (
					<MuiChip
						label={value}
						variant="outlined"
						onDelete={
							onDelete !== null
								? () => onDelete(value)
								: undefined
						}
					/>
				)}
			</ThemeProvider>
		);
	}
);

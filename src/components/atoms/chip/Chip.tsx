import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Chip as MuiChip, ChipProps } from '@mui/material';

import { TChip } from './Chip.types';
import { monsteraChipTheme } from './Chip.styles';

import { ComponentProvider } from '../../../services';

export const Chip: React.FC<TChip> = React.memo(
	({ onDelete = null, theme, ...props }) => {
		return (
			props.label != null &&
			props.label !== '' && (
				<ComponentProvider
					name="MuiChip"
					default={monsteraChipTheme}
					custom={theme}
				>
					<MuiChip
						{...props}
						onDelete={
							onDelete !== null
								? () => onDelete(props.label)
								: undefined
						}
					/>
				</ComponentProvider>
			)
		);
	}
);

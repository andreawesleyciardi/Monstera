import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';

import { IStyledChip } from './Chip.types';

export const StyledChip = styled.div<IStyledChip>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
`;

export const chipTheme = createTheme({
	components: {
		MuiChip: {
			defaultProps: {
				size: 'small',
			},
			styleOverrides: {
				root: {
					borderRadius: '5px',
				},
			},
		},
	},
});

import styled from 'styled-components';

import { IStyledChip } from './Chip.types';

export const StyledChip = styled.div<IStyledChip>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
`;

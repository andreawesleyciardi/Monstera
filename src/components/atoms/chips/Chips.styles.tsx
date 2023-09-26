import styled from 'styled-components';

import { IStyledChips } from './Chips.types';

export const StyledChips = styled.div<IStyledChips>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
`;

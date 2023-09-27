import styled from 'styled-components';

import { IStyledRecipients } from './Recipients.types';

export const StyledRecipients = styled.div<IStyledRecipients>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.5rem;
	position: relative;
	.recipients__chips-container {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 0.5rem;
	}
`;

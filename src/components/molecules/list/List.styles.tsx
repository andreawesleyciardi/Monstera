import styled from 'styled-components';

import { IStyledList } from './List.types';

export const StyledList = styled.div<IStyledList>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	color: ${({ theme }) => theme.colors.fontColor};
	.list__header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		background-color: ${({ theme }) =>
			theme.components.content.backgroundColor};
		position: relative;
		h3 {
			font-weight: 600;
		}
		.list__actions-container {
			position: absolute;
			right: 1.25rem;
			top: 50%;
			transform: translateY(-50%);
			background-color: red;
		}
	}
`;

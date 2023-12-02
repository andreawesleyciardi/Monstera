import styled from 'styled-components';
import { shade, tint } from 'polished';

import { IStyledAlert } from './Alert.types';
// import { getStyledBackgroundColor } from '../../../utilities/Services';

export const StyledAlert = styled.div<IStyledAlert>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1.5rem;
	position: relative;
	padding: 0.8rem 1.2rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	&.fadeout {
		opacity: 0;
		transition: opacity 500ms linear;
	}

	button {
		padding: 0px;
		outline: none !important;
		text-decoration: none !important;

		background-color: transparent;
		border: none;
	}
	p {
		margin: 0px;
	}
`;

// export const StyledAlert = styled.div<IStyledAlert>`
// 	display: flex;
// 	align-items: center;
// 	justify-content: flex-start;
// 	gap: 1.5rem;
// 	position: relative;
// 	padding: 0.8rem 1.2rem;
// 	margin-bottom: 1rem;
// 	border: 1px solid transparent;
// 	border-radius: 0.25rem;
// 	&.fadeout {
// 		opacity: 0;
// 		transition: opacity 500ms linear;
// 	}
// 	color: ${(props) =>
// 		shade(0.8, getStyledBackgroundColor(props.theme, props.$variant))};
// 	background-color: ${(props) =>
// 		tint(0.5, getStyledBackgroundColor(props.theme, props.$variant))};
// 	button {
// 		padding: 0px;
// 		outline: none !important;
// 		text-decoration: none !important;
// 		color: ${(props) =>
// 			shade(0.8, getStyledBackgroundColor(props.theme, props.$variant))};
// 		background-color: transparent;
// 		border: none;
// 	}
// 	p {
// 		margin: 0px;
// 	}
// `;

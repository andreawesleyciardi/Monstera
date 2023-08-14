import styled from 'styled-components';
import { shade, tint } from 'polished';

import {
	getStyledColor,
	getStyledBackgroundColor,
} from '../../utilities/Services';

export const StyledAlert = styled.div<{ $variant: string }>`
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
	color: ${({ theme, $variant }) =>
		shade(0.8, getStyledBackgroundColor(theme, $variant))};
	background-color: ${({ theme, $variant }) =>
		tint(0.5, getStyledBackgroundColor(theme, $variant))};
	button {
		padding: 0px;
		outline: none !important;
		text-decoration: none !important;
		color: ${({ theme, $variant }) =>
			shade(0.8, getStyledBackgroundColor(theme, $variant))};
		background-color: transparent;
		border: none;
	}
	p {
		margin: 0px;
	}
`;

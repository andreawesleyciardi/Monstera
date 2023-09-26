import styled from 'styled-components';

import { IStyledBadge } from './Badge.types';

export const StyledBadge = styled.div<IStyledBadge>`
	display: inline-block;
	background-color: ${({ $variant }) =>
		$variant === 'default' ? '#242a30' : 'red'};
	border-color: ${({ $variant }) =>
		$variant === 'default' ? '#242a30' : 'red'};
	border-style: solid;
	border-width: 2px;
	border-radius: 0.25rem;
	min-width: 5.25em;
	height: 1.715em;
	line-height: 1.5em !important;
	vertical-align: middle !important;
	padding: 0px 1.358em !important;
	font-weight: 500 !important;
	font-style: normal !important;
	font-size: 75% !important;
	color: #ffffff;
	text-align: center;
	white-space: nowrap;
`;

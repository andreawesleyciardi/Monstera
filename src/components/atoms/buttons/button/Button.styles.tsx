import styled from 'styled-components';

import {
	getStyledColor,
	getStyledBackgroundColor,
} from '../../../../utilities/Services';

import { IStyledButton } from './Button.types';

const StyledButton = styled.button<IStyledButton>`
	width: ${({ $fullWidth }) => ($fullWidth === true ? '100%' : 'auto')};
	border: 0;
	line-height: 1;
	font-size: 15px;
	cursor: pointer;
	font-weight: 700;
	font-weight: bold;
	border-radius: 3px;
	display: inline-block;
	padding: ${({ $size }) =>
		$size === 'small'
			? '7px 25px 8px'
			: $size === 'medium'
			? '9px 30px 11px'
			: '14px 30px 16px'};
	color: ${(props) => {
		return getStyledColor(props.theme, props.$variant);
	}};
	background-color: ${(props) => {
		return getStyledBackgroundColor(props.theme, props.$variant);
	}};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
	&:hover {
		filter: brightness(0.9);
	}
`;

export { StyledButton };

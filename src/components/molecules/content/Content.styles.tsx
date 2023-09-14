import styled from 'styled-components';

import { TStyledContentHeader } from './Content.types';
import { getStyledBackgroundColor } from './../../../utilities/Services';

export const StyledContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) =>
		theme.components.content.backgroundColor};
`;

export const StyledContentHeader = styled.div<TStyledContentHeader>`
	background-color: ${({ theme, $variant }) =>
		$variant === undefined || $variant === 'default'
			? 'transparent'
			: $variant === 'bars'
			? theme.brand.colors.bars
			: getStyledBackgroundColor(theme, $variant)};
`;

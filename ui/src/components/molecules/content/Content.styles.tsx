import styled from 'styled-components';

import { TStyledContentHeader } from './Content.types';
// import { getStyledBackgroundColor } from './../../../utilities/Services';

export const StyledContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) =>
		theme.components.content.backgroundColor};
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.07);
`;

export const StyledContentHeader = styled.div<TStyledContentHeader>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: ${({ $align }) =>
		$align === 'left'
			? 'flex-start'
			: $align === 'right'
			? 'flex-end'
			: $align};

	padding-left: 1rem;
	padding-right: 1rem;
	h3 {
		font-weight: 600;
	}
`;

// export const StyledContentHeader = styled.div<TStyledContentHeader>`
// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: ${({ $align }) =>
// 		$align === 'left'
// 			? 'flex-start'
// 			: $align === 'right'
// 			? 'flex-end'
// 			: $align};
// 	background-color: ${({ theme, $variant }) =>
// 		$variant === undefined || $variant === 'default'
// 			? 'transparent'
// 			: $variant === 'bars'
// 			? theme.brand.colors.bars
// 			: getStyledBackgroundColor(theme, $variant)};
// 	padding-left: 1rem;
// 	padding-right: 1rem;
// 	h3 {
// 		font-weight: 600;
// 	}
// `;

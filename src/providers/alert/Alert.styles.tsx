import styled from 'styled-components';

import { TStyledAlertProvider } from './Alert.types';

export const StyledAlertProvider = styled.div<TStyledAlertProvider>`
	display: flex;
	flex-direction: ${(props) =>
		props.$position.indexOf('bottom') >= 0 ? 'column-reverse' : 'column'};
	align-items: ${(props) =>
		props.$position.indexOf('right') >= 0
			? 'flex-end'
			: props.$position.indexOf('left') == -1
			? 'center'
			: 'flex-start'};
	justify-content: center;
	position: fixed;
	z-index: 9999;
	left: ${(props) =>
		props.$position.indexOf('left') >= 0 ? props.$offset.x : 'auto'};
	bottom: ${(props) =>
		props.$position.indexOf('bottom') >= 0 ? props.$offset.y : 'auto'};
	right: ${(props) =>
		props.$position.indexOf('right') >= 0 ? props.$offset.x : 'auto'};
	top: ${(props) =>
		props.$position.indexOf('top') >= 0 ? props.$offset.y : 'auto'};
	${(props) =>
		['left', 'right', 'center'].includes(props.$position)
			? 'transform: translateY(-50%);'
			: ''}
	${(props) =>
		['top', 'bottom', 'center'].includes(props.$position)
			? 'transform: translateX(-50%);'
			: ''}
`;

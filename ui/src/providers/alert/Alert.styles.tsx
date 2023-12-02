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
	justify-content: ${({ $variant }) =>
		$variant == 'backdrop' ? 'flex-start' : 'center'};
	position: fixed;
	z-index: 9999;
	left: ${({ $position, $offset, $variant }) =>
		$variant == 'backdrop'
			? '0px'
			: $position.indexOf('left') >= 0
			? $offset.x
			: 'auto'};
	top: ${({ $position, $offset, $variant }) =>
		$variant == 'backdrop'
			? '0px'
			: $position.indexOf('top') >= 0
			? $offset.y
			: 'auto'};
	right: ${({ $position, $offset, $variant }) =>
		$variant == 'backdrop'
			? '0px'
			: $position.indexOf('right') >= 0
			? $offset.x
			: 'auto'};
	bottom: ${({ $position, $offset, $variant }) =>
		$variant == 'backdrop'
			? '0px'
			: $position.indexOf('bottom') >= 0
			? $offset.y
			: 'auto'};

	padding-left: ${({ $position, $offset, $variant }) =>
		$position.indexOf('left') < 0 || $variant == 'default'
			? '0px'
			: $offset.x};
	padding-top: ${({ $position, $offset, $variant }) =>
		$position.indexOf('top') < 0 || $variant == 'default'
			? '0px'
			: $offset.y};
	padding-right: ${({ $position, $offset, $variant }) =>
		$position.indexOf('right') < 0 || $variant == 'default'
			? '0px'
			: $offset.x};
	padding-bottom: ${({ $position, $offset, $variant }) =>
		$position.indexOf('bottom') < 0 || $variant == 'default'
			? '0px'
			: $offset.y};
	${({ $position, $variant }) =>
		$variant == 'default'
			? ['left', 'right', 'center'].includes($position)
				? 'transform: translateY(-50%);'
				: ''
			: ''}
	${({ $position, $variant }) =>
		$variant == 'default'
			? ['top', 'bottom', 'center'].includes($position)
				? 'transform: translateX(-50%);'
				: ''
			: ''}
    background-color: ${({ $variant, theme }) =>
		$variant == 'default' ? 'transparent' : theme.brand.colors.bars};
`;

// &[variant='backdrop'] {
//     width: 100vw;
//     height: 100vh;
//     left: 0px;
//     top: 0px;
//     z-index: 9999;
//     background-color: var(--bars);
//     padding-right: 2rem;
//     padding-top: (conf.$topnavbar-height + 1rem);
//     justify-content: flex-start;
// }

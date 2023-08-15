import styled from 'styled-components';

import { TStyledAlertProvider } from './Alert.types';

export const StyledAlertProvider = styled.div<TStyledAlertProvider>`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	position: absolute;
	z-index: 999;
	right: 2rem;
	top: 2rem;
	// top: (conf.$topnavbar-height + 1rem);
`;

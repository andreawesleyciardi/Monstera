import styled from 'styled-components';

import { TStyledContentHeader } from './Content.types';

export const StyledContentHeader = styled.div<TStyledContentHeader>`
	background-color: ${(props) => {
		debugger;
		return 'red';
	}};
`;

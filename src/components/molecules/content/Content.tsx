import React from 'react';

import {
	TContent,
	TContentBody,
	TContentFooter,
	TContentHeader,
} from './Content.types';
import { StyledContent, StyledContentHeader } from './Content.styles';

// const contentConfigurator = (
// 	{ title, badge, ...bodyProps }: TAlertConfig
// ) => {
// 	if (alertProps.description == null && alertProps.content == null) {
// 		return null;
// 	}

// 	return {
// 		bodyProps: bodyProps,
// 		footerProps: '',
// 		headerProps: '',
// 	};
// };

export const Content = (props: TContent) => {
	let { children } = props;
	return <StyledContent>{children != null && children}</StyledContent>;
};

export const ContentHeader = (props: TContentHeader) => {
	let { children, variant = 'default' } = props;
	return (
		<StyledContentHeader $variant={variant}>{children}</StyledContentHeader>
	);
};

export const ContentBody = (props: TContentBody) => {
	let { children } = props;
	return <div>{children}</div>;
};

export const ContentFooter = (props: TContentFooter) => {
	let { children } = props;
	return <div>{children}</div>;
};

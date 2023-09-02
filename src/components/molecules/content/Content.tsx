import React from 'react';

import {
	TContent,
	TContentBody,
	TContentFooter,
	TContentHeader,
} from './Content.types';
import { StyledContentHeader } from './Content.styles';

export const ContentHeader = (props: TContentHeader) => {
	let { children } = props;
	return <StyledContentHeader>{children}</StyledContentHeader>;
};

export const ContentBody = (props: TContentBody) => {
	let { children } = props;
	return <div>{children}</div>;
};

export const ContentFooter = (props: TContentFooter) => {
	let { children } = props;
	return <div>{children}</div>;
};

export const Content = (props: TContent) => {
	let { children: Children, childrenProps, variant = 'default' } = props;

	return (
		<>
			<ContentHeader>HEADER</ContentHeader>
			<ContentBody>
				{props.children != null ? (
					<Children {...childrenProps}></Children>
				) : null}
			</ContentBody>
			<ContentFooter>FOOTER</ContentFooter>
		</>
	);
};

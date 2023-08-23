import React from 'react';

import { TContent } from './Content.types';

// Try to use Paper component from mui

export const Content = (props: TContent) => {
	let { variant } = props;
	return <div>{variant}</div>;
};

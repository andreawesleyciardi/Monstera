import React from 'react';

import { TAction } from './Action.types';

import { Button } from '../..';

export const Action: React.FC<TAction> = ({
	children = null,
	className = '',
	event = 'onClick',
	icon = null,
	key = null,
	label = null,
	labelInTooltip = true,
	onClick = null,
	onKeyDown = null,
}) => {
	// TO MANAGE onKeyDown

	return onClick != null || onKeyDown != null ? (
		<Button
			variant="link"
			className={`action action--${key} ${className}`}
			onClick={(e) => {
				onClick != null && onClick(e);
			}}
		>
			{children != null ? children : key}
		</Button>
	) : (
		<p>{children != null ? children : key}</p>
	);
};

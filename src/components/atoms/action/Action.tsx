import React from 'react';

import { TAction } from './Action.types';

import { Button } from '../..';

export const Action: React.FC<TAction> = ({
	children = null,
	className = '',
	event = 'onClick',
	icon = null,
	label = null,
	labelInTooltip = true,
	onClick = null,
	onKeyDown = null,
	type = null,
}) => {
	// TO MANAGE onKeyDown

	return onClick != null || onKeyDown != null ? (
		<Button
			variant="link"
			className={`action action--${type} ${className}`}
			onClick={(e) => {
				onClick != null && onClick(e);
			}}
		>
			{children != null ? children : type}
		</Button>
	) : (
		<p>{children != null ? children : type}</p>
	);
};

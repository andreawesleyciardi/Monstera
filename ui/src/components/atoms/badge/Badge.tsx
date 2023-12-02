import React from 'react';

import { TBadge } from './Badge.types';
import { StyledBadge } from './Badge.styles';

export const Badge: React.FC<TBadge> = ({
	className = '',
	legend = null,
	value = null,
	variant = 'default',
}) => {
	if (value == null) {
		return null;
	}

	return (
		<StyledBadge className={className} $legend={legend} $variant={variant}>
			{value}
		</StyledBadge>
	);
};

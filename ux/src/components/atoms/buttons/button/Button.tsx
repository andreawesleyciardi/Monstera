import React from 'react';

import { IButton } from './Button.types';
import { StyledButton } from './Button.styles';

export const Button: React.FC<IButton> = ({
	children,
	className = '',
	disabled = false,
	fillMode = 'solid',
	fullWidth = false,
	isLoading = false,
	onClick,
	size = 'medium',
	type = 'button',
	variant = 'primary',
	...props
}) => {
	return (
		<StyledButton
			className={`button button--${variant} ${className}`}
			disabled={disabled}
			$fillMode={fillMode}
			$fullWidth={fullWidth}
			$isLoading={isLoading}
			onClick={onClick}
			$size={size}
			type={type}
			$variant={variant}
		>
			{children}
		</StyledButton>
	);
};

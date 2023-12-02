import { MouseEventHandler } from 'react';
import { TSizes, TVariants } from '../../../../utilities/Types';

type TButtonType = 'button' | 'submit' | 'reset';

type TButtonFillMode = 'solid' | 'outline' | 'link';

export type TButtonVariants = TVariants | 'link';

export interface IButton {
	children: any;
	className?: string;
	disabled?: boolean;
	fillMode?: TButtonFillMode;
	fullWidth?: boolean;
	isLoading?: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
	size?: TSizes;
	type?: TButtonType;
	variant?: TButtonVariants;
}

export interface IStyledButton {
	disabled: boolean;
	$fillMode: TButtonFillMode;
	$fullWidth: boolean;
	$isLoading: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
	$size: TSizes;
	type: TButtonType;
	$variant: TButtonVariants;
}

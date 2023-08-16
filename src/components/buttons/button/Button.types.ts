import { MouseEventHandler } from 'react';
import { TSizes, TVariants } from '../../../utilities/Types';

type TButtonType = 'button' | 'submit' | 'reset';

type TButtonFillMode = 'solid' | 'outline' | 'link';

export interface IButton {
	children: any;
	disabled?: boolean;
	fillMode?: TButtonFillMode;
	fullWidth?: boolean;
	isLoading?: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
	size?: TSizes;
	type?: TButtonType;
	variant?: TVariants;
}

export interface IStyledButton {
	disabled: boolean;
	$fillMode: TButtonFillMode;
	$fullWidth: boolean;
	$isLoading: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
	$size: TSizes;
	type: TButtonType;
	$variant: TVariants;
}

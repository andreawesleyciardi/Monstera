import { TFullSizes, TVariants } from './../../../utilities/Types';
import { TContentVariants } from '../content/Content.types';

export type TModalChildren = React.FunctionComponent;

export type TModalChildrenProps = object;

export type TModalProps = {
	disableEscapeKeyDown?: boolean;
	fullScreen?: boolean;
	fullWidth?: boolean;
	scroll?: 'body' | 'paper';
	size?: TFullSizes;
	variant?: TContentVariants; // switch "type" for "variant" in UBIWebapp
};

export type TModal = {
	show: boolean;
	children: TModalChildren | null;
	childrenProps: TModalChildrenProps | null;
	modalProps: TModalProps | null;
};

export type IStyledModal = {
	$whatever: string;
};

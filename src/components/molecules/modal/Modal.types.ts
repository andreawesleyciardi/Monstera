import { Breakpoint } from '@mui/material';

import { TFullSizes, TVariants } from './../../../utilities/Types';
import {
	TContentVariants,
	TContentChildren,
	TContentChildrenProps,
} from '../content/Content.types';

export type TModalSize = Breakpoint | false | undefined;

export type TModalProps = {
	disableEscapeKeyDown?: boolean;
	fullScreen?: boolean;
	fullWidth?: boolean;
	scroll?: 'body' | 'paper';
	size: TModalSize;
	variant?: TContentVariants; // switch "type" for "variant" in UBIWebapp
};

export type TModal = {
	children: TContentChildren;
	childrenProps: TContentChildrenProps;
	modalProps: TModalProps | null;
	show: boolean;
};

export type IStyledModal = {
	$whatever: string;
};

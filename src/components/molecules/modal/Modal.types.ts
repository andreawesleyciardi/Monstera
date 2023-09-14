import { Breakpoint } from '@mui/material';

import {
	TChildren,
	TChildrenProps,
	TFullSizes,
	TVariants,
} from '../../../utilities/Types';
import { TContentVariants } from '../content/Content.types';

export type TModalSize = Breakpoint | false | undefined;

export type TModalProps = {
	variant?: TContentVariants; // switch "type" for "variant" in UBIWebapp
};

export type TModal = {
	children: TChildren;
	variant?: TContentVariants;
	[key: string]: any;
};

export type IStyledModal = {
	$whatever: string;
};

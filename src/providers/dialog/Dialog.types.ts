import { Breakpoint } from '@mui/material';

import { TChildren, TChildrenProps } from './../../utilities';

export type TDialogSize = Breakpoint | false | undefined;

export type TDialogScroll = 'body' | 'paper';

export type TDialogProps = {
	disableEscapeKeyDown?: boolean;
	fullScreen?: boolean;
	fullWidth?: boolean;
	scroll?: TDialogScroll;
	maxWidth: TDialogSize;
	[key: string]: any;
	//variant?: TContentVariants; // switch "type" for "variant" in UBIWebapp
};

export type TOpenDialogProps =
	| TDialogProps
	| {
			size?:
				| TDialogSize
				| ((dialogChildrenProps?: TChildrenProps) => TDialogSize);
			[key: string]: any;
	  };

export type TDialogOpen = (
	dialogChildren: TChildren,
	openDialogProps: TOpenDialogProps,
	onResolve?: () => void,
	onReject?: () => void,
	decorator?: TChildren | null
) => void;

export type TDialogClose = (
	successful: boolean,
	result?: object,
	params?: object
) => void;

export type TDialogContext = {
	open: TDialogOpen;
	close: TDialogClose;
};

export type TDialogProvider = {
	children: React.ReactNode;
};

export type THandleResult = (result?: object, params?: object) => void;

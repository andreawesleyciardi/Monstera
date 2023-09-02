import { Breakpoint } from '@mui/material';

import {
	TModalProps,
	TModalSize,
} from './../../components/molecules/modal/Modal.types';
import {
	TContentChildren,
	TContentChildrenProps,
} from './../../components/molecules/content/Content.types';

export type TOpenModalProps = TModalProps | {
	size?:
		| TModalSize
		| ((modalChildrenProps?: TContentChildrenProps) => TModalSize);
	[key: string]: any;
};

export type TModalOpen = (
	modalChildren: TContentChildren,
	openModalProps: TOpenModalProps,
	onResolve?: () => void,
	onReject?: () => void
) => void;

export type TModalClose = (
	successful: boolean,
	result?: object,
	params?: object
) => void;

export type TModalContext = {
	open: TModalOpen;
	close: TModalClose;
};

export type TModalProvider = {
	children: React.ReactNode;
};

export type THandleResult = (result?: object, params?: object) => void;

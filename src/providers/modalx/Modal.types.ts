import { Breakpoint } from '@mui/material';

import {
	TModalProps,
	TModalSize,
} from '../../components/organisms/modal/Modal.types';
import { TChildren, TChildrenProps } from './../../utilities/Types';

export type TOpenModalProps =
	| TModalProps
	| {
			size?:
				| TModalSize
				| ((modalChildrenProps?: TChildrenProps) => TModalSize);
			[key: string]: any;
	  };

export type TModalOpen = (
	modalChildren: TChildren,
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

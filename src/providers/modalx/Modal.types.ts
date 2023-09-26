import { Breakpoint } from '@mui/material';

import {
	TModalProps,
	TModalSize,
} from '../../components/molecules/modal/Modal.types';
import { TElement, TElementProps } from '../../utilities/Types';

export type TOpenModalProps =
	| TModalProps
	| {
			size?:
				| TModalSize
				| ((modalChildrenProps?: TElementProps) => TModalSize);
			[key: string]: any;
	  };

export type TModalOpen = (
	modalChildren: TElement,
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

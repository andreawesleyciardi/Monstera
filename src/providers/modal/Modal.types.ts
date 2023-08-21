import {
	TContentComponent,
	TContentProps,
	TModalProps,
} from './../../components/molecules/modal/Modal.types';

export type TOpenModalProps = TModalProps & {
	size?: string | ((childrenProps?: TContentProps) => string);
};

export type TModalOpen = (
	modalChildren: TContentComponent,
	props: TOpenModalProps,
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

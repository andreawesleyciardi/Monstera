import { TFullSizes } from './../../utilities/Types';
import {
	TModalChildren,
	TModalChildrenProps,
	TModalProps,
} from './../../components/molecules/modal/Modal.types';

export type TOpenModalProps = TModalProps & {
	size?:
		| TFullSizes
		| ((modalChildrenProps?: TModalChildrenProps) => TFullSizes);
};

export type TModalOpen = (
	modalChildren: TModalChildren,
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

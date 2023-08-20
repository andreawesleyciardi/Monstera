import React, { useContext, useState } from 'react';
import { Whatever } from '@mui/material/Dialog';

import {
	TModalClose,
	TModalContext,
	TModalOpen,
	TModalProvider,
	TContentComponent,
	TOpenModalProps,
	TContentProps,
	TModalProps,
} from './Modal.types';
import { Modal } from './../../components/molecules/modal/Modal';

const modalConfigurator = (props: TOpenModalProps) => {
	let { type = 'default', size = 'md', ...contentProps } = props;
	const modalProps = {
		type,
		size: typeof size === 'function' ? size(contentProps) : size,
	};

	return { contentProps: contentProps, modalProps: modalProps };
};

// Provider

const ModalContext = React.createContext<TModalContext | null>(null);

export const ModalProvider: any = ({ children }: TModalProvider) => {
	const [show, setShow] = useState<boolean>(false);

	const [contentComponent, setContentComponent] =
		useState<TContentComponent>(null);
	const [contentProps, setContentProps] = useState<TContentProps>({});
	const [modalProps, setModalProps] = useState<TModalProps>({});

	const [handleResolve, setHandleResolve] = useState<(() => void) | null>(
		null
	);
	const [handleReject, setHandleReject] = useState<(() => void) | null>(null);

	const handleOpen: TModalOpen = (content, props, onResolve, onReject) => {
		let { contentProps, modalProps } = modalConfigurator(props);
		setContentComponent(content);
		setContentProps(contentProps);
		setModalProps(modalProps);
		setHandleResolve(() => onResolve);
		setHandleReject(() => onReject);
	};

	const handleClose: TModalClose = (successful, result, params) => {
		// if (successful === true) {
		//     if (handleResolve !== null) {
		//         handleResolve(result, params);
		//     }
		// }
		// else if (successful === false) {
		//     if (handleReject !== null) {
		//         handleReject(result, params);
		//     }
		// }
		// setShow(false);
	};

	return (
		<ModalContext.Provider
			value={{
				open: handleOpen,
				close: handleClose,
			}}
		>
			{children}
			{show && <Modal whatever="test" />}
		</ModalContext.Provider>
	);
};

// Hook

export const useModal = () => {
	let modalContext = useContext(ModalContext);
	return modalContext;
};

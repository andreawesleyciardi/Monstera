import React, { useContext, useState } from 'react';
import { Whatever } from '@mui/material';

import {
	TModalClose,
	TModalContext,
	TModalOpen,
	TModalProvider,
	TContentComponent,
	TOpenModalProps,
	TContentProps,
	TModalProps,
	THandleResult,
} from './Modal.types';
import { Modal } from './../../components/molecules/modal/Modal';

const modalConfigurator = (props: TOpenModalProps) => {
	let { type = 'default', size = 'md', ...contentProps } = props;
	const modalProps = {
		type,
		size: typeof size === 'function' ? size(contentProps) : size,
	};

	return { parsedContentProps: contentProps, parsedModalProps: modalProps };
};

// Provider

const ModalContext = React.createContext<TModalContext | null>(null);

export const ModalProvider: any = ({ children }: TModalProvider) => {
	const [show, setShow] = useState<boolean>(false);

	const [contentComponent, setContentComponent] =
		useState<TContentComponent | null>(null);
	const [contentProps, setContentProps] = useState<TContentProps | null>(
		null
	);
	const [modalProps, setModalProps] = useState<TModalProps | null>(null);

	const [handleResolve, setHandleResolve] = useState<THandleResult | null>(
		null
	);
	const [handleReject, setHandleReject] = useState<THandleResult | null>(
		null
	);

	const handleOpen: TModalOpen = (content, props, onResolve, onReject) => {
		let { parsedContentProps, parsedModalProps } = modalConfigurator(props);
		setContentComponent(content);
		setContentProps(parsedContentProps);
		setModalProps(parsedModalProps);
		setHandleResolve(() => onResolve);
		setHandleReject(() => onReject);
	};

	const handleClose: TModalClose = (successful, result, params) => {
		if (successful === true) {
			handleResolve !== null && handleResolve(result, params);
		} else if (successful === false) {
			handleReject !== null && handleReject(result, params);
		}
		setShow(false);
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

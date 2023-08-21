import React, { useContext, useEffect, useState } from 'react';

import {
	TModalClose,
	TModalContext,
	TModalOpen,
	TModalProvider,
	TOpenModalProps,
	THandleResult,
} from './Modal.types';
import { Modal } from './../../components/molecules/modal/Modal';
import {
	TContentComponent,
	TContentProps,
	TModalProps,
} from './../../components/molecules/modal/Modal.types';

const modalConfigurator = (props: TOpenModalProps) => {
	let { type = 'default', size = 'md', ...modalChildrenProps } = props;
	const modalProps = {
		type,
		size: typeof size === 'function' ? size(modalChildrenProps) : size,
	};

	return {
		parsedModalChildrenProps: modalChildrenProps,
		parsedModalProps: modalProps,
	};
};

// Provider

const ModalContext = React.createContext<TModalContext | null>(null);

export const ModalProvider: any = ({ children }: TModalProvider) => {
	const [show, setShow] = useState<boolean>(false);

	const [modalChildren, setModalChildren] =
		useState<TContentComponent | null>(null);
	const [modalChildrenProps, setModalChildrenProps] =
		useState<TContentProps | null>(null);
	const [modalProps, setModalProps] = useState<TModalProps | null>(null);

	const [handleResolve, setHandleResolve] = useState<THandleResult | null>(
		null
	);
	const [handleReject, setHandleReject] = useState<THandleResult | null>(
		null
	);

	const handleOpen: TModalOpen = (
		modalChildren,
		props,
		onResolve,
		onReject
	) => {
		let { parsedModalChildrenProps, parsedModalProps } =
			modalConfigurator(props);
		setModalChildren(modalChildren);
		setModalChildrenProps(parsedModalChildrenProps);
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

	useEffect(() => {
		if (modalChildren !== null && modalChildrenProps !== null) {
			setShow(true);
		}
	}, [modalChildren, modalChildrenProps, modalProps]);

	const resetComponent = () => {
		setModalChildren(null);
		setModalChildrenProps(null);
		setModalProps(null);
		setHandleResolve(null);
		setHandleReject(null);
	};

	useEffect(() => {
		if (show === false) {
			resetComponent();
		}
	}, [show]);

	useEffect(() => {
		return () => {
			if (show == false) {
				resetComponent();
			}
		};
	}, []);

	return (
		<ModalContext.Provider
			value={{
				open: handleOpen,
				close: handleClose,
			}}
		>
			{children}
			{show && (
				<Modal
					children={modalChildren}
					childrenProps={modalChildrenProps}
					modalProps={modalProps}
					show={show}
				/>
			)}
		</ModalContext.Provider>
	);
};

// Hook

export const useModal = () => {
	let modalContext = useContext(ModalContext);
	return modalContext;
};

import React, { useContext, useEffect, useState } from 'react';

import {
	TModalClose,
	TModalContext,
	TModalOpen,
	TModalProvider,
	TOpenModalProps,
	THandleResult,
} from './Modal.types';
import { Modal, TModalProps } from './../../components/molecules/modal';
import {
	TContentChildren,
	TContentChildrenProps,
} from './../../components/molecules/content/Content.types';
import { TFullSizes } from './../../utilities/Types';

const modalConfigurator = (props: TOpenModalProps) => {
	let {
		disableEscapeKeyDown,
		fullScreen,
		fullWidth,
		scroll,
		size,
		...modalChildrenProps
	} = props;

	const modalProps = {
		disableEscapeKeyDown,
		fullScreen,
		fullWidth,
		scroll,
		size: typeof size === 'function' ? size(modalChildrenProps) : size,
	};

	return {
		parsedModalChildrenProps: modalChildrenProps,
		parsedModalProps: modalProps,
	};
};

// Provider

const ModalContext = React.createContext<TModalContext | null>(null);

export const ModalProvider: any = (props: TModalProvider) => {
	let { children } = props;
	const [show, setShow] = useState<boolean>(false);

	const [modalChildren, setModalChildren] = useState<TContentChildren | null>(
		null
	);

	const [modalChildrenProps, setModalChildrenProps] =
		useState<TContentChildrenProps>(null);
	const [modalProps, setModalProps] = useState<TModalProps | null>(null);
	const [handleResolve, setHandleResolve] = useState<THandleResult | null>(
		null
	);
	const [handleReject, setHandleReject] = useState<THandleResult | null>(
		null
	);

	const handleOpen: TModalOpen = (
		modalChildren,
		openModalProps,
		onResolve,
		onReject
	) => {
		let { parsedModalChildrenProps, parsedModalProps } =
			modalConfigurator(openModalProps);
		setModalChildren(() => modalChildren);
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

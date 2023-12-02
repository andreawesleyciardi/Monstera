import React, { useContext, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';

import {
	TDialogClose,
	TDialogContext,
	TDialogOpen,
	TDialogProps,
	TDialogProvider,
	TDialogScroll,
	TDialogSize,
	TOpenDialogProps,
	THandleResult,
} from './Dialog.types';
import { TElement, TElementProps } from './../../utilities';

const dialogConfigurator = (props: TOpenDialogProps) => {
	let {
		disableEscapeKeyDown = true,
		fullScreen = false,
		fullWidth = true,
		scroll = 'paper' as TDialogScroll,
		size = 'sm' as TDialogSize,
		...dialogChildrenProps
	} = props;

	const dialogProps = {
		disableEscapeKeyDown,
		fullScreen,
		fullWidth,
		scroll,
		maxWidth: typeof size === 'function' ? size(dialogChildrenProps) : size,
	};

	return {
		parsedDialogChildrenProps: dialogChildrenProps,
		parsedDialogProps: dialogProps,
	};
};

// Provider

const DialogContext = React.createContext<TDialogContext | null>(null);

export const DialogProvider: any = (props: TDialogProvider) => {
	let { children } = props;
	const [show, setShow] = useState<boolean>(false);
	const [DialogChildren, setDialogChildren] = useState<TElement | null>(null);
	const [dialogChildrenProps, setDialogChildrenProps] =
		useState<TElementProps>(null);
	const [dialogProps, setDialogProps] = useState<TDialogProps | null>(null);
	const [handleResolve, setHandleResolve] = useState<THandleResult | null>(
		null
	);
	const [handleReject, setHandleReject] = useState<THandleResult | null>(
		null
	);
	const [Decorator, setDecorator] = useState<TElement | null>(null);

	const handleOpen: TDialogOpen = (
		dialogChildren,
		openDialogProps,
		onResolve,
		onReject,
		decorator
	) => {
		let { parsedDialogChildrenProps, parsedDialogProps } =
			dialogConfigurator(openDialogProps);
		setDialogChildren(() => dialogChildren);
		setDialogChildrenProps(parsedDialogChildrenProps);
		setDialogProps(parsedDialogProps);
		setHandleResolve(() => onResolve);
		setHandleReject(() => onReject);
		setDecorator(() => decorator as TElement);
	};

	const handleClose: TDialogClose = (successful, result, params) => {
		if (successful === true) {
			handleResolve !== null && handleResolve(result, params);
		} else if (successful === false) {
			handleReject !== null && handleReject(result, params);
		}
		setShow(false);
	};

	useEffect(() => {
		if (DialogChildren !== null && dialogChildrenProps !== null) {
			setShow(true);
		}
	}, [DialogChildren, dialogChildrenProps, dialogProps]);

	const resetComponent = () => {
		setDialogChildren(null);
		setDialogChildrenProps(null);
		setDialogProps(null);
		setHandleResolve(null);
		setHandleReject(null);
		setDecorator(null);
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
		<DialogContext.Provider
			value={{
				open: handleOpen,
				close: handleClose,
			}}
		>
			{children}
			<Dialog
				{...dialogProps}
				open={show}
				PaperProps={{ elevation: 0, square: true }}
			>
				{DialogChildren != null &&
					(Decorator != null ? (
						<Decorator
							{...dialogChildrenProps}
							children={DialogChildren}
						/>
					) : (
						<DialogChildren {...dialogChildrenProps} />
					))}
			</Dialog>
		</DialogContext.Provider>
	);
};

// Hooks

export const useDialog = () => {
	let dialogContext = useContext(DialogContext);
	return dialogContext;
};

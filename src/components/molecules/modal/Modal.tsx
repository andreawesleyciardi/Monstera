import React from 'react';
import Dialog from '@mui/material/Dialog';

import { TModal, TModalProps } from './Modal.types';
import { Content, TContentVariants } from '../content';
// import {} from './Modal.styles';

export const Modal = (props: TModal) => {
	let { show, children, childrenProps, modalProps } = props;

	let {
		disableEscapeKeyDown = true,
		fullScreen = false,
		fullWidth = false,
		scroll = 'paper',
		size = 'md',
		variant = 'default',
	} = modalProps as TModalProps;

	return (
		<Dialog
			disableEscapeKeyDown={disableEscapeKeyDown}
			fullScreen={fullScreen}
			fullWidth={fullWidth}
			maxWidth={size}
			open={show}
			scroll={scroll}
		>
			<Content variant={variant as TContentVariants} />
		</Dialog>
	);
};

import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Breakpoint } from '@mui/material';

import { TModal, TModalProps, TModalSize } from './Modal.types';
import { StyledModal } from './Modal.styles';
import { Content, TContentVariants, TContentChildren } from '../content';

export const Modal = (props: TModal) => {
	let { show, children, childrenProps, modalProps } = props;

	let {
		disableEscapeKeyDown = true,
		fullScreen = false,
		fullWidth = true,
		scroll = 'paper',
		size = 'sm' as TModalSize,
		variant = 'bars',
	} = modalProps as TModalProps;

	return (
		<Dialog
			disableEscapeKeyDown={disableEscapeKeyDown}
			fullScreen={fullScreen}
			fullWidth={fullWidth}
			maxWidth={size}
			open={show}
			PaperProps={{ elevation: 0, square: true }}
			scroll={scroll}
		>
			<Content
				variant={variant as TContentVariants}
				children={children as TContentChildren}
				childrenProps={childrenProps}
			/>
		</Dialog>
	);
};

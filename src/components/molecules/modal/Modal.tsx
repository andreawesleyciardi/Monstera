import React from 'react';
import Dialog from '@mui/material/Dialog';

import { TModal } from './Modal.types';
// import {} from './Modal.styles';

export const Modal = (props: TModal) => {
	let { show, children, childrenProps, modalProps } = props;

	return (
		<Dialog {...modalProps} open={show}>
			Content
		</Dialog>
	);
};

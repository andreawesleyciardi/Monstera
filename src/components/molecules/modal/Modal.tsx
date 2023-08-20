import React from 'react';
// import Dialog from '@mui/material/Dialog';

import { TModal } from './Modal.types';
// import {} from './Modal.styles';

export const Modal = (props: TModal) => {
	let { whatever } = props;

	return <div>{whatever}</div>;
};

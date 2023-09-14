import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';

import { TDialogOpen, useDialog } from '../../../providers';
import { TModal, TModalProps, TModalSize } from './Modal.types';
import { Content, ContentBody, ContentFooter, ContentHeader } from '..';
import { TChildren } from './../../../utilities';

// Component
export const Modal = (props: TModal) => {
	let { children: Children, variant = 'bars', ...childrenProps } = props;

	const [confirm, setConfirming] = useState(false);

	return (
		<>
			<div style={{ display: confirm ? 'flex' : 'none' }}>
				<Content>
					<ContentHeader variant={'warning'}>Header</ContentHeader>
					<ContentBody>Are you sure you want to proceed?</ContentBody>
					<ContentFooter>Confirm Footer</ContentFooter>
				</Content>
			</div>
			<div style={{ display: confirm ? 'none' : 'flex' }}>
				<Content>
					<ContentHeader variant={variant}>Header</ContentHeader>
					<ContentBody>
						<Children {...childrenProps}></Children>
					</ContentBody>
					<ContentFooter>Footer</ContentFooter>
				</Content>
			</div>
		</>
	);
};

// Hook

export const useModal = () => {
	const usedialog = useDialog();
	const open = (
		...[
			modalChildren,
			openModalProps,
			onResolve,
			onReject,
		]: Parameters<TDialogOpen>
	) => {
		usedialog?.open(
			modalChildren,
			openModalProps,
			onResolve,
			onReject,
			Modal as TChildren
		);
	};
	return {
		open: open,
		close: usedialog?.close,
	};
};

// (props) => {
// 	debugger;
// 	return <Modal children={modalChildren} {...props}></Modal>;
// },
